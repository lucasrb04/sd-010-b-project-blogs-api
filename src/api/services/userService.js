const { conflict } = require('../helpres/error');
const { postNewUser } = require('../model/userModel');

console.log('service');

const createUser = async (user) => {
  const newUser = await postNewUser(user);

  if (!newUser) return conflict('User already registered');

  return newUser; 
};

module.exports = {
  createUser,
};
