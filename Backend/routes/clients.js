import express from "express";
import { getProducts } from "../controllers/clients.js";
import { getCustomers } from "../controllers/clients.js";
import { getTransactions } from "../controllers/clients.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);

export default router;
