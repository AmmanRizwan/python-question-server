const UserData = require('../model/code.model.js');


// Get All UserData
const getAllUserData = async (req, res) => {
  try {
    const getUser = await UserData.find({});
    
    if (!getUser) {
      res.status(404).json({message: "Data Not Found"});
    }

    res.status(200).json(getUser);
  }
  catch(err) {
    res.status(404).json({err: err.message});
  }
}

// Get Single Data
const getUserData = async (req, res) => {
  try {
    const keyId = Number(req.params.id);
    console.log(keyId);
    const getUser = await UserData.findOne({id: keyId});

    if (!getUser) {
      res.status(404).json({message: "The Data is Not In the Database"});
    }
  
    res.status(200).json(getUser);
  }
  catch(err) {
    res.status(404).json({err: err.message});
  }
}


// Create UserData
const createUserData = async (req, res) => {
  try {
    let id;
    const findData = await UserData.find({});
    if (findData.length > 0)
    {
      id = findData[findData.length - 1].id;
      id += 1;
    }
    else {
      id = 1;
    }

    const newData = {
      id: Number(id),
      question: req.body.question,
      code: req.body.code
    };

    const createData = await UserData.create(newData);

    if (!createData) {
      return res.status(404).json({err: "Cannot Create a New UserData"});
    }
    res.status(201).json({message: "Create Data Successfully!!"});
  }
  catch(err) {
    res.status(404).send({err: err.message});
  }
}

// Update UserData
const updateUserData = async (req, res) => {
  try {
    const keyId = Number(req.params.id);

    const newData = {
      question: req.body.question,
      code: req.body.code,
    }

    const updateData = await UserData.findOneAndUpdate({id: keyId}, newData);
    
    if (!updateData) {
      return res.status(404).json({message: "Cannot Update the Data"});
    }
  
    res.status(201).json({message: "Update Data Successfully!!"});
  }
  catch(err) {
    res.status(404).json({err: err.message});
  }
}

// Delete UserData
const deleteUserData = async (req, res) => {
  try {
    const keyId = Number(req.params.id);
    const deleteData = await UserData.findOneAndDelete({id: keyId});

    if (!deleteData) {
      return res.status(404).json({err: "Cannot Delete the Data"});
    }
    res.status(200).json({message: "Delete Data Successfully!!"});
  }
  catch(err) {
    res.status(404).json({err: err.message});
  }
}

module.exports = {
  getAllUserData,
  getUserData,
  createUserData,
  updateUserData,
  deleteUserData,
}