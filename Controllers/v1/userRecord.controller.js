const client = require("../../utils/connection.js");
const recordsCollection = client.db("openAuto").collection("usersRecord");

exports.getUserRecord = async(req,res) => {
  try {
    const allRecord = await recordsCollection.find().toArray();
    res.status(200).json({
      success: true,
      allRecord
    })
  } catch (error) {
    res.status(400).json({
      message: "Something is wrong",
      status: 400,
      error: error.message,
    });
  }
}

// Create New Record 
exports.newRecord = async(req,res) => {
  try {
    const result = await recordsCollection.insertOne(req.body)
    res.status(201).json({
      message: "Record created successfully",
      status: 201,
      result
    });

  } catch (error) {
    res.status(400).json({
      message: "Record not created",
      status: 400,
      error: error.message,
    });
  }
}

