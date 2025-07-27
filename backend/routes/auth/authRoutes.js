import express from "express";

const authRouter = express.Router();

authRouter.get("/authTest", async (req, res) => {
  res.send("this is testing aauth routes");
});

export default authRouter;
