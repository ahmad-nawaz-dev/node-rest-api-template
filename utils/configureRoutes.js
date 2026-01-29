const authMiddleware = require("../middleware/authMiddleware");

const registerRoutes = (router, routes = []) => {
  routes.forEach((route) => {
    const { method, path, handler, auth = [], middlewares = [] } = route;

    const allMiddlewares = [];

    if (auth.length > 0) {
      allMiddlewares.push((req, res, next) =>
        authMiddleware(req, res, next, auth),
      );
    }
    if (middlewares.length > 0) {
      allMiddlewares.push(...middlewares);
    }
    router[method](path, ...allMiddlewares, handler);
  });
};

module.exports = registerRoutes;
