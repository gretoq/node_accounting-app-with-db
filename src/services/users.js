'use strict';

const { User } = require('../models/User');
// const { getNewId } = require('../utils/helpers');

// let users = [];

const getAll = () => {
  return User.findAll({
    order: ['id'],
  });

  // return users;
};

const getById = (userId) => {
  return User.findByPk(userId);

  // const foundUser = users.find(({ id }) => id === +userId);

  // return foundUser;
};

const create = (name) => {
  return User.create({ name });

  // const newUser = {
  //   id: getNewId(users),
  //   ...userBody,
  // };

  // users.push(newUser);

  // return newUser;
};

const remove = (userId) => {
  return User.destroy({
    where: {
      id: userId,
    },
  });

  // users = users.filter(({ id }) => id !== +userId);
};

const update = (userId, name) => {
  return User.update(
    { name },
    {
      where: {
        id: userId,
      },
    },
  );

  // Object.assign(getById(userId), { ...userBody });
};

// const reset = () => {
//   users = [];
// };

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
  // reset,
};
