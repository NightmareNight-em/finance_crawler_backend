const express = require("express");
const {
  createExpense,
  fetchSingleExpense,
  updateExpense,
  deleteExpense,
  fetchSingleWithoutPagination, fetchAllExpenses,
} = require("../../controllers/expenses/expenseCtrl");

const expRoute = express.Router();
const auth = require("../../middleware/authMiddleware");

expRoute.post("/", auth, createExpense);
expRoute.get("/all", auth, fetchAllExpenses);
expRoute.get("/:id", auth, fetchSingleExpense);
expRoute.get("/wop/:id", auth, fetchSingleWithoutPagination);
expRoute.put("/:id/update", auth, updateExpense);
expRoute.delete("/:id/delete", auth, deleteExpense);

module.exports = expRoute;
