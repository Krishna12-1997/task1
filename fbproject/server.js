const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get("/", function (request, response) {
  response.send("hello world");
});

// define a route for post request
app.post("/api", (req, res) => {
  const { body1, body2 } = req.body;

  if (!body1 || !body2) {
    return res.status(403).json({ error: "body1 and body2 are required" });
  }

  // return success response
  return res.json({ message: "request procced successfully" });
});

// error handler
app.use((err, req,res,next) => {
    console.error(err);
    return res.status(500).json({error: "something went wrong"})
})

// Start the server
app.listen(port, () => console.log(`Server running on ${port}`));
