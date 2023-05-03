const errorHandler  =(err,req,res,next)=>{
const {constants} = require('../constant');
const statusCode  = res.statusCode ? res.statusCode : 500;

switch (statusCode) {
    case constants. VAIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.FORBIDDEN:
        res.json({
          title: "Forbidden",
          message: err.message,
          stackTrace: err.stack,
     });
    case constants.UNAUTHORIZED:
        res.json({
        title: "unauthorized",
        message: err.message,
        stackTrace: err.stack,
     });
     case constants.SERVER_ERROR:
        res.json({
        title: "server-eror",
        message: err.message,
        stackTrace: err.stack,
     });

    default:
        console.log('No Error, All good! ');
      break;
  }

    res.json({message:err.message, stackTrace :err.stack})
}
module.exports = errorHandler