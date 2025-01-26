// middlewares/isAdmin.js
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
  
  module.exports = isAdmin;
  