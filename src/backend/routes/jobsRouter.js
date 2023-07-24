import express from "express";
import {
  addJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from "../services/jobs.js";

export const jobsRouter = express.Router();

jobsRouter.get("/:nickname", async (req, res, next) => {
  try {
    const nickname = req.params;
    const jobs = await getAllJobs(nickname);
    res.status(jobs.status).json(jobs);
  } catch (error) {
    next(error);
  }
});
jobsRouter.get("/job/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const job = await getJob(id);
    res.status(job.status).json(job);
  } catch (error) {
    next(error);
  }
});

jobsRouter.post("/", async (req, res, next) => {
  const data = req.body;
  try {
    const newJob = await addJob(data);
    console.log(newJob);
    res.status(newJob.status).json(newJob);
  } catch (error) {
    next(error);
  }
});

jobsRouter.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedJob = await deleteJob(id);
    res.status(deletedJob.status);
  } catch (error) {
    next(error);
  }
});

jobsRouter.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const updatedJob = await updateJob(id, data);
    res.status(200).json(updatedJob);
  } catch (error) {
    next(error);
  }
});

export default jobsRouter;
