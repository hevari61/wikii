const express = require("express");
var cors = require("cors");
const { wikisearch } = require("./wikisearch");
const app = express();

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

app.get("/hello", (req, res, next) => {
  wikisearch(haku, (error, data) => {
    if (error) {
      res.end(error);
    } else {
      res.json(data);
    }res
  });
});
