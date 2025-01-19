import User from '../user/user.model.js';

export const isAdmin = async (req, res, next) => {
  const admin = await User.find({ role: 'admin' });
};
