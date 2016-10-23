import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  title: { type: 'String', required: true, min: 3, max: 255 },
  course: { type: 'String', ref: 'Course'},
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Chapter', chapterSchema);
