'use strict';

const expenseService = require('../services/expenses');
const userService = require('../services/users');

const getAll = async(req, res) => {
  const expenses = await expenseService.getAll(req.query);

  res.send(expenses);
};

const getOne = async(req, res) => {
  const { expenseId } = req.params;
  const foundExpense = await expenseService.getById(expenseId);

  if (!foundExpense) {
    return res.sendStatus(404);
  }

  res.send(foundExpense);
};

const add = async(req, res) => {
  const {
    amount,
    category,
    note,
    spentAt,
    title,
    userId,
  } = req.body;
  const foundUser = await userService.getById(userId);

  if (!amount || !category || !note || !spentAt || !title || !foundUser) {
    return res.sendStatus(400);
  }

  const newExpense = await expenseService.create(req.body);

  res.status(201);
  res.send(newExpense);
};

const remove = async(req, res) => {
  const { expenseId } = req.params;
  const foundExpense = await expenseService.getById(expenseId);

  if (!foundExpense) {
    return res.sendStatus(404);
  }

  await expenseService.remove(expenseId);
  res.sendStatus(204);
};

const change = async(req, res) => {
  const { expenseId } = req.params;
  const foundExpense = await expenseService.getById(expenseId);

  if (!foundExpense) {
    return res.sendStatus(404);
  }

  const {
    amount,
    category,
    note,
    title,
    userId,
  } = req.body;

  await expenseService.update(
    expenseId,
    {
      amount,
      category,
      note,
      title,
      userId,
    },
  );

  const updatedExpense = await expenseService.getById(expenseId);

  res.send(updatedExpense);
};

module.exports = {
  getAll,
  getOne,
  add,
  remove,
  change,
};
