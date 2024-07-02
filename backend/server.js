import express from "express";
import cors from "cors";

import DepPusatRoute from "./routes/DepPusatRoute.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use(DepPusatRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
