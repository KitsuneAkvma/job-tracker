import express, { query } from "express";
import colors from "colors";

import { configDotenv } from "dotenv";
import morgan from "morgan";
import jobsRouter from "./routes/jobsRouter.js";
import { userRouter } from "./routes/userRouter.js";

configDotenv();

const app = express();
const PORT = 8080;

app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome Home" });
});

app.use("/jobs", jobsRouter);
app.use("/auth", userRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ status: 500, message: "An error occurred💩", error: err.message });
});

app.listen(PORT, () => {
  console.log(colors.bgMagenta(`Server is running on port ${PORT}`));
});
