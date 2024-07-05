const PHI3_LOCATION = "local";
let URL = "";
export const Theme = "dark";

switch (PHI3_LOCATION) {
  case "local":
    URL = "http://127.0.0.1:5000";
    break;
  case "azure":
    URL = "http://parent-bot.centralindia.cloudapp.azure.com:5000";
    break;
  case "port":
    URL = "https://jj8bzvnc-5000.inc1.devtunnels.ms/";
    break;
  default:
    URL = "https://jj8bzvnc-5000.inc1.devtunnels.ms/";
}

export { URL };
