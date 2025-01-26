module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      // Define the attributes for your User model, for example:
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return User;
  };
  