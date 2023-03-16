const { decodeJwt } = require("../utils/JWTToolkit");
const User = require("./../model/User");

const validateToken = async (req,res,next)=>{
    let token = req.headers.authorization ?
    req.headers.authorization.split(" ")[1] 
    : req.body.token || req.query.token;

    if(token != "" && token != undefined){
        try {
            const data = decodeJwt(token);
            const findUser = await User.findByPk(data.data.id);
            if (findUser) {
              {
                findUser.password = undefined;
                req.user = findUser;
                next();
              }
            } else {
              res.status(401).json({ err: "Unauthorized" }).send();
            }
          }
          catch (e) {
            if(e.message == "jwt malformed"){
                res.status(401).json({ err: "Unauthorized" }).send();
            }else{
                res.status(500).json({ err: "Internal server error" }).send();
            }
          }
    }else{
        res.status(400).json({ err: "Bad request" }).send();
    }
}

module.exports = validateToken;