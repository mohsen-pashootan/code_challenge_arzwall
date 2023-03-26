export const UID = (prefix?: string, suffix?: string) => {
  let uid = Date.now().toString(36); //Create the uids in chronological order
  uid += Math.round(Math.random() * 36).toString(36); //Add a random character at the end
  if (prefix) uid = prefix + uid;
  if (suffix) uid = uid + suffix;
  return uid;
};

export const isExist = (ref = "", key = "") => {
  try {
    return ref.includes(key);
  } catch (error) {
    console.log("# isExist error:", error);
  }
};
