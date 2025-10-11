import eventModel from "../models/event_model";

const getAllEvents = async () => {
  const events = await eventModel.find();
  return events;
};

export { getAllEvents };
