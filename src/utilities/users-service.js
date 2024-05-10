import debug from "debug";
import * as usersAPI from "./users-api";

const log = debug("mern:utilities:users-service");

export const signUp = async (userData) => {
  // console.log("user services signup");
  log("userData: %o", userData);

  const token = await usersAPI.signUp(userData);

  log("token: %o", token);
  return token;
};
