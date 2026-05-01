// backend.js
import express from "express";
import cors from "cors";
import userServices from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  if (name && job) {
    userServices.findUserByNameAndJob(name, job)
      .then((result) => res.send({ users_list: result }))
      .catch(() => res.status(500).send("Server error."));
  } else {
    userServices.getUsers(name, job)
      .then((result) => res.send({ users_list: result }))
      .catch(() => res.status(500).send("Server error."));
  }
});

app.get("/users/:id", (req, res) => {
  userServices.findUserById(req.params.id)
    .then((result) => {
      if (result === null) {
        res.status(404).send("Resource not found.");
      } else {
        res.send(result);
      }
    })
    .catch(() => res.status(500).send("Server error."));
});

app.post("/users", (req, res) => {
  userServices.addUser(req.body)
    .then((result) => res.status(201).send(result))
    .catch(() => res.status(500).send("Server error."));
});

app.delete("/users/:id", (req, res) => {
  userServices.deleteUserById(req.params.id)
    .then((result) => {
      if (result === null) {
        res.status(404).send("Resource not found.");
      } else {
        res.status(204).send();
      }
    })
    .catch(() => res.status(500).send("Server error."));
});