const express = require("express");
const {
  createExpense,
  fetchExpenses,
  fetchSingleExpense,
  updateExpense,
  deleteExpense,
} = require("../../controllers/expenses/expenseCtrl");

const expRoute = express.Router();
const auth = require("../../middleware/authMiddleware");

expRoute.post("/", auth, createExpense);
expRoute.get("/all", auth, fetchExpenses);
expRoute.get("/:id", auth, fetchSingleExpense);
expRoute.put("/:id/update", auth, updateExpense);
expRoute.delete("/:id/delete", auth, deleteExpense);

module.exports = expRoute;
