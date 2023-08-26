const validateBody = require('./validateBody');
const { checkBody } = require('./checkBody');
const { checkBodyFavorites } = require('./checkBody');
const isValidId = require('./isValidId');
const authenticate = require('./authenticate');
const upload = require('./upload');

module.exports = {
  validateBody,
  checkBody,
  checkBodyFavorites,
  isValidId,
  authenticate,
  upload,
};
