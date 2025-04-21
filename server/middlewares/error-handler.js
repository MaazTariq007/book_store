const errorHanlder = (err, reqeust, response, next) => {
  let statusCode = response.statusCode ? response.statusCode : 500;

  switch (statusCode) {
    case 400:
      response.send({
        success: false,
        title: "Bad request",
        msg: err.message,
      });
      break;

    case 401:
      response.send({
        success: false,
        title: "Unauthorized",
        msg: err.message,
      });
      break;

    case 403:
      response.send({
        success: false,
        title: "Forbidden",
        msg: err.message,
      });
      break;

    case 404:
      response.send({
        success: false,
        title: "Not found",
        msg: err.message,
      });
      break;

    default:
      response.send({
        success: false,
        title: "Internal error",
        msg: err.message,
      });
      break;
  }
};

export default errorHanlder;
