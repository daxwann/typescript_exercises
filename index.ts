import express from "express";
const app = express();
const bodyParser = require('body-parser')
import { parseQueryParam, calculateBMI } from "./bmiCalculator";
import { parseReqBody, calculateExercises } from "./exerciseCalculator"; 

app.use(bodyParser.json());

app.get("/hello", (_req, res) => {
  res.send("Hello World");
});

app.get("/bmi", (req, res) => {
  try {
    const { height, weight } = parseQueryParam(
      req.query.height as string,
      req.query.weight as string
    );

    const bmi: string = calculateBMI(height, weight);

    const response = {
      height,
      weight,
      bmi,
    };

    res.send(response);
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(`Error: ${e.message as string}`);
  }
});

app.post('/exercises', (req, res) => {
  try {
    const { daily_exercises, target } = parseReqBody(req.body);
    const response = calculateExercises(daily_exercises, target);
    res.send(response);
  } catch(e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(`Error: ${e.message as string}`);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
