function flyController(req,res){
  res.status(200).send('Hello');
}

function flyName(req,res){
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  console.log(req.headers)
  const { name } = req.params;
  res.status(200).send(`Hello ${name}`);
}

module.exports = {
  flyController,
  flyName,
}