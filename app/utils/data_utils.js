const replaceMongoIdInArray = (arr) => {
  return arr.map((item) => {
    if (item && item._id) {
      item.id = item._id;
      delete item._id;
    }
    return item;
  });
};
export { replaceMongoIdInArray };
