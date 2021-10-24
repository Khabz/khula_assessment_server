import express, { Request, Response } from "express";
import cors from "cors";

const PORT = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
