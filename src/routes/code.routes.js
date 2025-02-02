import express from 'express';

import {
  getCodeData,
  getSingleCodeData,
  createCodeData,
  updateCodeData,
  deleteCodeData
} from '../controller/code.controller.js';

const CodeRouter = express.Router();

// Get All Data and Create Data Route
CodeRouter.route("/").get(getCodeData).post(createCodeData);

// Get Single Data, Delete Data and Update Data Route
CodeRouter.route("/:id").get(getSingleCodeData).delete(deleteCodeData).put(updateCodeData);

export default CodeRouter;