import { eventModel } from "../models/event_model";

const getAllEvents = async () => {
  const events = await eventModels.find();
  return events;
};

export { getAllEvents };
