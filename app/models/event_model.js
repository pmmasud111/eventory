import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  interested_ids: { type: [String], required: false },
  going_ids: { type: [String], required: false },
  swgs: { type: [String], required: false },
});

const eventModel = mongoose.models.events || mongoose.model("events", schema);

export default eventModel;
