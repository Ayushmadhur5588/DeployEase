import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generateId } from "./generateId";
import { getAllFiles } from "./file";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/deploy", async (req, res) => {
  const repoUrl = req.body.repoUrl;
  const id = generateId();
  await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));
  const files = getAllFiles(path.join(__dirname, `output/${id}`));
  console.log(files);
  res.json({
    id: id,
  });
});

app.get("/", (req, res) => {
  console.log(__dirname);
  const result = getAllFiles(__dirname);
  res.json({ data : result });
});

app.listen(3000);
