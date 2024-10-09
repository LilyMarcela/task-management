const roleMiddleware = (requiredRole) => {
  return (req, rest, next) => {
    if (req.user && req.user.role == requiredRole) {
      next();
    } else {
      return rest.status(403).json({ error: "access denied" });
    }
  };
};

module.exports = roleMiddleware;
