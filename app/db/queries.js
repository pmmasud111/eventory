import eventModel from "../models/event_model";
import { replaceMongoIdInArray } from "../utils/data_utils";

const getAllEvents = async () => {
  const events = await eventModel.find().lean();
  return replaceMongoIdInArray(events);
};

export { getAllEvents };
