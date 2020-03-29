const isLoggedIn = () => (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    return res.status(401).json({ status: "You have to be logged in" });
  }
};

const isLoggedOut = () => (req, res, next) => {
  if (!req.user) {
    return next();
  } else {
    return res.status(401).json({ status: "You have to be logged out" });
  }
};

module.exports = {
  isLoggedIn,
  isLoggedOut
};
