const TestCon = (req, res) => {
  const data = ["luke", "john", "maria", "kristina"];
  res.status(200).json(data);
};

module.exports = {
  TestCon,
};


// USE NEXT JS GET API THEN WORK WITH POST