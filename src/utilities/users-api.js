import debug from "debug";
// This is the base path of the Express route we'll define
const BASE_URL = "/api/users";
const log = debug("mern:utilities:user-api");

export const signUp = async (userData) => {
  log("userData: %o", userData);
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    return res.json();
  } else {
    log("error: Invalid Sign Up");
    throw new Error("Invalid Sign Up");
  }
};

export async function login(userData) {
  log("userData: %o", userData);
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (res.ok) {
    return res.json();
  } else {
    log("error: Invalid Login");
    throw new Error("Invalid Login");
  }
}
