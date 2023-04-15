import express from "express";
import testUser from "../middleware/testUser.js";
const router = express.Router();
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";

router.route("/").post(testUser, createJob).get(getAllJobs);
router.route('/stats').get(showStats);
router.route("/:id").patch(testUser, updateJob).delete(testUser, deleteJob);


export default router;