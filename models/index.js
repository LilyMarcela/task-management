const User = require("./User");
const Role = require("./Role");
const Task = require("./Task");
const UserRoles = require("./UserRoles");

// User-Role (many to many)

User.belongsToMany(Role, { through: UserRoles });
Role.belongsToMany(User, { through: UserRoles });

// User - task (One to many)

User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

module.exports = { User, Role, Task, UserRoles };
