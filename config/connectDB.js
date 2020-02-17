const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin-Binu:${process.env.mongoPassword}@cluster0-9npsv.mongodb.net/logBook`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })

    console.log('Database is connected')
  } catch (error) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;