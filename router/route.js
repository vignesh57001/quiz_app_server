import { Router } from "express";
const router = Router();
import * as controller from "../controllers/controller.js";

/**routes for add, get and delete **/
/**------------------- step-1 --------- we use step-2 ------------------------**/

// router.get("/questions", controller.getQuestions);
// router.post("/questions", controller.insertQuestions);
// router.delete("/questions", controller.dropQuestions);

/**------------------- step-2 --------- using line ------------------------**/
// questions
router
  .route("/questions")
  .get(controller.getQuestions) //** GET - this line for getting questions from api**//
  .post(controller.insertQuestions) //** POST - this line for post questions to api**//
  .delete(controller.dropQuestions); //** DELETE - this line for delete questions from api**//

// results
router
  .route("/result")
  .get(controller.getResult) //** GET - this line for getting Results from api**//
  .post(controller.storeResult) //** POST - this line for post Results to api**//
  .delete(controller.dropResult); //** DELETE - this line for delete Results from api**//

export default router;
