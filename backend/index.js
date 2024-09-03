const config = require("./config");
const express = require("express");
const cors = require("cors");
const model = config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/ask", async (req, res) => {
  const data = req.body;
  let prompt = data.prompt;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }
  
  try{
    const result = await model.generateContent(prompt);
    res.status(200).json({ result:result.response.text() });
  }
  catch(error){
    console.log("Something went wrong!",error);
    res.status(500).json({error:error})
  }
});

app.listen(5000, () => {
  console.log("Running!");
});
