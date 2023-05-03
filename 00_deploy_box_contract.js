const boxfn = require("./box");
const { deployApp } = require("./boxapp");
require("dotenv").config();

(async () => {
  await deployApp();
})();
