import { Request, Response } from "express";
import prisma from "../prismaClient";

export const createArticle = async (req: Request, res: Response) => {
  const { title, body, authorId } = req.body;
  try {
    const article = await prisma.article.create({
      data: {
        title,
        body,
        author: { connect: { id: authorId } },
      },
    });
    res.status(201).json(article);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await prisma.article.findMany();
    res.json(articles);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedArticle = await prisma.article.delete({
      where: { id: Number(id) },
    });
    res.json(deletedArticle);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
