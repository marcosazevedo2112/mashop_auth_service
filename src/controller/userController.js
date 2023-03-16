const { Router } = require("express");
const app = Router();
const User = require("./../model/User");
const { genJwt } = require("../utils/JWTToolkit");
const validateToken = require("./../middleware/authMiddleware");
const bcrypt = require("bcrypt");
const saltRounds = 12;

const {
  userValidationRules,
  loginValidationRules,
  validate,
} = require("../middleware/validationMiddleware");

app.get("/", validateToken, (req,res)=>{
  res.status(200).json(req.user).send();
})

app.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  if (!isNaN(id) && id > 0 && id < Infinity) {
    const findUser = await User.findByPk(id);
    if (findUser != null) {
      data = {
        name: findUser.name,
        email: findUser.email,
        joinDate: new Date(findUser.createdAt).toLocaleDateString("pt-BR"),
      };

      res.status(200).json({ data: data }).send();
    } else {
      res.status(404).json({ err: "Not found" }).send();
    }
  } else {
    next();
  }
});

app.post("/new", userValidationRules(), validate, async (req, res) => {
  const findUser = await User.findOne({ where: { email: req.body.email } });
  if (findUser) {
    res.status(409).json({ err: "Email already in use" }).send();
  } else {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err == null) {
        User.create({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          bday: req.body.bday,
          emailVerified: false,
        })
          .then((data) => {
            data.password = undefined;
            res.status(200).json(data).send();
          })
          .catch((err) => {
            res.status(500).json({ err: "Internal server error" }).send();
          });
      } else {
        res.status(500).json({ err: "Internal server error" }).send();
      }
    });
  }
});

app.post("/login", loginValidationRules(), validate, async (req, res) => {
  if (req.body.email && req.body.password) {
    const email = req.body.email;
    const password = req.body.password;
    const findUser = await User.findOne({ where: { email: req.body.email } });
    if (findUser) {
      bcrypt.compare(password, findUser.password, (err, same) => {
        if (same == true) {
          try {
            const token = genJwt({ id: findUser.id }, 60 * 60 * 48);
            res.status(200).json({ token }).send();
          } catch (e) {
            res.status(500).json({ err: "Internal server error" }).send();
          }
        } else {
          res.status(401).json({ err: "Unauthorized" }).send();
        }
      });
    } else {
      res.status(404).json({ err: "Not found" }).send();
    }
  }else {
    res.status(400).json({ err: "Bad request" }).send();
  }
});

module.exports = app;
