import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";
import connect from "./database/connection.js";

const app = express();

/**app middlewares**/
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

/**application port**/
const port = process.env.PORT || 8000;

/** routes **/

app.use("/api", router); /** api enpoint get line **/

app.get("/", (req, res) => {
  try {
    res.json("Server Connected Successfully at the port " + port);
  } catch (error) {
    res.json(error);
  }
});

/**start connection only when we have valid connection URL**/

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(
          `Server Connected Successfully at http://localhost:${port}`
        );
      });
    } catch (error) {
      console.log("db connection failed");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection");
  });
