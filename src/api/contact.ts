import express from "express";
import createContact from "../application/contact";

const contactRouter = express.Router();

// POST /api/contact - Send contact form email
contactRouter.route("/").post(createContact);

export default contactRouter;
