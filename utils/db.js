const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// schema
// const Contact = mongoose.model('Contact', {
//   nama: {
//     type: String,
//     required: true
//   },

//   email: {
//     type: String
//   }
// });

// // menambah 1 data
// const contact1 = new Contact({
//   nama: 'Naruto Uzumaki',
//   email: 'Uzumaki@gmail.com'
// });

// //simpan ke collections
// contact1.save().then((contact) => console.log(contact));
