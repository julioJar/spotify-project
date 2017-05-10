/* eslint no-console: ["error", { allow: ["log", "error"] }] */
const express = require('express');
const path = require('path');

const app = express();
const staticPath = path.join(__dirname, './build');
const APP_PORT = process.env.PORT || 5000;

/* serves all the static files */
app.use(express.static(staticPath));
 /* serves main page */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './build'));
});

app.listen(APP_PORT, () => {
  console.log(`App running on localhost:${APP_PORT}`);
});
