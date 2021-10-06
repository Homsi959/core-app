import express, { Request, Response } from "express";

const app = express();
const PORT = 3001

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log("asd");

    })
  } catch (err) { }
}

start()