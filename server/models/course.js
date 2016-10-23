import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: 'String', required: true, max: 255 },
  subtitle: { type: 'String', required: true, max: 255  },
  description: { type: 'String', required: true },
  price: { type: 'String', required: true },
  duration: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Course', courseSchema);
