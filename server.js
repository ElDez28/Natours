const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: `./config.env` });
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXEPCTION! 💥 Shutting down');
  console.log(err.name, err.message);
  process.exit(1);
});
const app = require('./app');
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successfull'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down');
  console.log(err.name, err.message);
  // process.exit(1); //0 stands for success and 1 for uncaught exepction
  server.close(() => {
    process.exit(1);
  });
});
