import mongoose from 'mongoose';

// set schema
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  contact: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  adminId: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User',
  },
});

//create model / collection

const Student = mongoose.model('Student', studentSchema);

export default Student;
