const dotenv = require("dotenv");
dotenv.config();

const PORT = 8000;

// Local URI
// const MONGODB_URI = 'mongodb://localhost:27017/dbmstest';

// Atlas URI
const MONGODB_URI = 'mongodb+srv://renish05:BZr3XaxDMKfvpsQ3@cluster0.fk4tldo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

module.exports = {
  PORT,
  MONGODB_URI,
};
