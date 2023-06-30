const http = require("http");
const app = require("../src/config/app");
const server = http.createServer(app);

server.listen(5000, "localhost", (err) => {
  if (err) console.log(err);
  console.log(`Server Listening on port 5000`);
});
