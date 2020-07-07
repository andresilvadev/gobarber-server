module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN, // Informação se é um prestador de serviços ou não
  });

  return User;
};
