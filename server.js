const express = require("express");
const next = require("next");
const TestRouter = require("./Routes/testRoutes");
const PORT = 3400;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use("/test", TestRouter);

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT, (err) => {
    if (err) {
      return err;
    } else {
      console.log(`Server started on ${PORT}`);
    }
  });
});


