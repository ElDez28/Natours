class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; //to radimo da bi kasnije mogli testirati da li je error operational ili ne i da li cemo onda poslati error ili ne
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = AppError;
