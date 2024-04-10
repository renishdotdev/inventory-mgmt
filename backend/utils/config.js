const dotenv = require("dotenv");
dotenv.config();

const PORT = 8000;
const MONGODB_URI = 'mongodb://localhost:27017/dbmstest';

module.exports = {
  PORT,
  MONGODB_URI,
};
