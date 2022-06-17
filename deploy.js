const ghp = require("gh-pages");

ghp.publish("dist", () => {
  console.log("Done");
});
