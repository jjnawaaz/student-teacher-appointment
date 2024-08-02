export const convertLowercase = (obj) => {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "string") {
      result[key] = obj[key].toLowerCase();
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};
