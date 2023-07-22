import Questions from "../models/questionSchema.js"; // variable name as Questions instead of questionSchema
import Results from "../models/resultSchema.js"; // variable name as Results instead of resultSchema
import questions, { answers } from "../database/data.js";

/** ------------------- questions -------------------------------------**/

/**get all questions from api**/

export async function getQuestions(req, res) {
  try {
    const ques = await Questions.find();
    res.json(ques);
  } catch (error) {
    res.json({ error });
  }
}

/**Insert questions into api**/

export async function insertQuestions(req, res) {
  try {
    //1st questions is coll -key name // 2nd questions is from index of data base
    Questions.insertMany({ questions, answers })
      .then(function () {
        res.json({ msg: "Data Saved Succesfully" });
      })
      .catch(function (err) {
        console.log(err);
      });
  } catch (error) {
    res.json({ error });
  }
}

// export async function insertQuestions(req, res) {
//   try {
//     Questions.insertMany(
//       { questions, answers },
//       function (err, data) {
//         res.json({ msg: "Data Saved Succesfully" });
//       }
//     );
//   } catch (error) {
//     res.json({ error });
//   }
// }

/**delete questions from api**/

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json("Delete questions from api from controller file");
  } catch (error) {
    res.json({ error });
  }
}

/**------------------------ result ------------------------------------------**/

/**get all results from api**/

export async function getResult(req, res) {
  try {
    const result = await Results.find();
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
}

/**Insert results into api**/

export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided");

    Results.create({ username, result, attempts, points, achived })
      .then(function () {
        res.json({ msg: "Data Saved Succesfully" });
      })
      .catch(function (err) {
        console.log(err);
      });
  } catch (error) {
    res.json({ error });
  }
}

/**delete results from api**/

export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Delete result from api through controller file" });
  } catch (error) {
    res.json({ error });
  }
}
