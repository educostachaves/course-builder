import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  title: { type: 'String', required: true, min: 3, max: 255 },
  chapter: { type: Schema.Types.ObjectId, ref: 'Chapter'},
  type: { type: 'String', required: true},
  content: { type: 'String', data: 'Buffer', required: true},
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Content', contentSchema);
