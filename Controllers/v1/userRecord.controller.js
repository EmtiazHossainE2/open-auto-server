const client = require("../../utils/connection.js");
const recordsCollection = client.db("openAuto").collection("usersRecord");

exports.getUserRecord = async(req,res) => {
  const allRecord = await recordsCollection.find({}).toArray();
  res.send(allRecord)
}

// Create New Record 
exports.newRecord = async(req,res) => {
  const data = req.body;
  const result = await recordsCollection.insertOne(data);
  res.send(result);
}

