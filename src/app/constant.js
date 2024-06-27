const PHI3_LOCATION = "remote";
// const PHI3_LOCATION = "remote";

export const URL =
  PHI3_LOCATION === "local"
    ? "http://127.0.0.1:5000"
    : "http://parent-bot.centralindia.cloudapp.azure.com:5000";