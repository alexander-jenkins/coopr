// register a new user
exports.register = (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
};

// login an existing user
exports.login = (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
};
