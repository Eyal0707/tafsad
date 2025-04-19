import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: String, required: true },
}, { _id: false });

const PendingFormSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  commander: String,
  eventDescription: String,
  createdAt: String,
  updatedAt: String,
});

const EmbeddedPendingFormSchema = new mongoose.Schema({
  id: String,
  name: String,
  commander: String,
  eventDescription: String,
  createdAt: String,
  updatedAt: String,
}, { _id: false });


const FormSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  commander: String,
  eventDescription: String,
  occurrence: String,
  damage: String,
  prevention: String,
  date: String,
  requestDateTime: String,
  columnId: String,
  punishment: String,
  comments: { type: [CommentSchema], default: [] },
  connectedPendingForm: { type: EmbeddedPendingFormSchema, default: null }
});

export const Form = mongoose.model('Form', FormSchema);
export const PendingForm = mongoose.model('PendingForm', PendingFormSchema);
