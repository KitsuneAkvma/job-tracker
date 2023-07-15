import express from "express";
import { login, signup, verifyAccount } from "../services/users.js";

export const userRouter = express.Router();

userRouter.get("/", async (req, res, next) => {
  try {
    res.status(200).json({
      status: 200,
      message: "This will be get current user route.",
      data: {},
    });
  } catch (error) {
    next(error);
  }
});

userRouter.post("/signup", async (req, res, next) => {
  const credentials = req.body;
  try {
    const newUser = await signup(credentials);
    res.status(newUser.status).json(newUser);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/verification/:token", async (req, res, next) => {
  const token = req.params.token;
  try {
    const verification = await verifyAccount(token);
    res.status(verification.status).json(verification);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/verification", async (req, res, next) => {
  try {
    res
      .status(200)
      .json({ status: 200, message: "This will be resend email route." });
  } catch (error) {
    next(error);
  }
});

userRouter.post("/login", async (req, res, next) => {
  const credentials = req.body;
  try {
    const loginUser = await login(credentials);
    res.status(loginUser.status).json(loginUser);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/logout", async (req, res, next) => {
  try {
    res
      .status(200)
      .json({ status: 200, message: "This will be logout route", data: {} });
  } catch (error) {
    next(error);
  }
});

userRouter.delete("/signout", async (req, res, next) => {
  try {
    res.status(200).json({
      status: 200,
      message: "This will be route to remove account.",
      data: {},
    });
  } catch (error) {
    next(error);
  }
});

userRouter.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    res.status(200).json({
      status: 200,
      message: "This will be user update route.",
      data: {},
    });
  } catch (error) {
    next(error);
  }
});
