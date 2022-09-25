const client = require("../../utils/connection.js");
const recordsCollection = client.db("openAuto").collection("usersRecord");

// Create New Record 
exports.newRecord = async(req,res) => {
  const data = req.body;
  const result = await recordsCollection.insertOne(data);
  res.send(result);
}

