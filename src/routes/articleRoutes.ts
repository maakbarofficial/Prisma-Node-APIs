import { Router } from "express";
import {
  createArticle,
  getAllArticles,
  deleteArticle,
} from "../controllers/articleController";

const router = Router();

router.post("/", createArticle);
router.get("/", getAllArticles);
router.delete("/:id", deleteArticle);

export default router;
