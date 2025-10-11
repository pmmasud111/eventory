import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  interested_ids: { type: Array, required: false },
  going_ids: { type: Array, required: false },
  swgs: { type: Array, required: false },
});

const eventModels = mongoose.model.events ?? mongoose.model("events", schema);
export default eventModels;
