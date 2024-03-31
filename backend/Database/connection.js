const mongoose = require('mongoose');
// const db = 'mongodb+srv://dinesh1804200182:12345@cluster0.a3ndhin.mongodb.net/userdata';
// const db = 'mongodb+srv://dinesh1804200182:webpristine@webpristine.cpqydmo.mongodb.net/webpristine';
const db = 'mongodb+srv://dinesh1804200182:Dinesh%4018042001@admindashboard.rgnzh2j.mongodb.net/admindashboard';

mongoose.connect(db)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
