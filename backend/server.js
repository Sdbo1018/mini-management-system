const express = require("express");
const cors = require("cors");

const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Mini Management System API is running"
  });
});

const PORT = 5000;

app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
