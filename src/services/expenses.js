'use strict';

const { Expense } = require('../models/Expense');
const { Op } = require('sequelize');

const getAll = async(filters) => {
  const {
    userId,
    categories,
    to,
    from,
  } = filters;
  const where = {};

  if (userId) {
    where.userId = userId;
  }

  if (categories) {
    where.category = {
      [Op.in]: Array.isArray(categories)
        ? categories
        : [categories],
    };
  } else {
    where.category = {
      [Op.not]: null,
    };
  }

  if (from) {
    where.spentAt = {
      [Op.gte]: from,
    };
  }

  if (to) {
    where.spentAt = {
      ...where.spentAt,
      [Op.lte]: to,
    };
  }

  return Expense.findAll({
    where,
    order: ['id'],
  });
};

const getById = (expenseId) => {
  return Expense.findByPk(+expenseId);
};

const create = (expenseBody) => {
  return Expense.create({ ...expenseBody });
};

const remove = (expenseId) => {
  return Expense.destroy({
    where: {
      id: expenseId,
    },
  });
};

const update = (expenseId, expenseBody) => {
  return Expense.update(
    { ...expenseBody },
    {
      where: {
        id: expenseId,
      },
    }
  );
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
