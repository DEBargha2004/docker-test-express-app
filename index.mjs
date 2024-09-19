import express from "express";
import { nanoid } from "nanoid";

const app = express();

const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  const randId = nanoid();
  console.log("This is a test log and now is updated with nanoid ", randId);

  res.json({ message: `This is a test id ${randId}` });
});

app.get("/health", (req, res) => {
  res.json({ status: "Wallah everything is ok" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});
