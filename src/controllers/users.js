'use strict';

const userService = require('../services/users');

const getAll = async(req, res) => {
  const users = await userService.getAll();

  res.send(users);
};

const getOne = async(req, res) => {
  const { userId } = req.params;
  const foundUser = await userService.getById(userId);

  if (!foundUser) {
    return res.sendStatus(404);
  }

  res.send(foundUser);
};

const add = async(req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.sendStatus(400);
  }

  const newUser = await userService.create(name);

  res.status(201);
  res.send(newUser);
};

const remove = async(req, res) => {
  const { userId } = req.params;
  const foundUser = await userService.getById(userId);

  if (!foundUser) {
    return res.sendStatus(404);
  }

  await userService.remove(userId);
  res.sendStatus(204);
};

const change = async(req, res) => {
  const { userId } = req.params;
  const { name } = req.body;
  const foundUser = await userService.getById(userId);

  if (!foundUser) {
    return res.sendStatus(404);
  }

  if (!name) {
    return res.sendStatus(400);
  }

  await userService.update(userId, name);

  const updatedUser = await userService.getById(userId);

  res.send(updatedUser);
};

// const reset = () => userService.reset();

module.exports = {
  getAll,
  getOne,
  add,
  remove,
  change,
  // reset,
};
