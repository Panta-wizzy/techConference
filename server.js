const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, phone, profession, ticket } = req.body;

  if (!name || !email || !phone || !profession || !ticket) {
    return res.status(400).json({ message: "Missing fields" });
  }

  console.log("New Registration:", req.body);

  // Later: save to database
  res.status(200).json({ message: "Registration successful" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
