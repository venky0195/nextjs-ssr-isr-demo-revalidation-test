export default function handler(req, res) {
  console.log("This is a simple log")
  console.log("env",JSON.stringify(process.env))
  res
    .status(200)
    .send({
      query: req.query,
      method: req.method,
      body: req.body,
      headers: req.headers,
      envVars: process.env,
      randomNum: Math.floor((Math.random()*100) + 1)
    });
}
