const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/user");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const foundUser = await User.findOne({ username });
      if (foundUser) {
        bcrypt.compareSync(password, foundUser.password)
          ? done(null, foundUser)
          : done(null, false);
      } else {
        done(null, false);
      }
    } catch (error) {
      done(error);
    }
  })
);
