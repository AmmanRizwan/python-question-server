import UserData from '../model/code.model.js';

// Get All UserData
export const getAllUserData = async (req, res) => {
  try {
    const getUser = await UserData.find({});
    
    if (!getUser) {
      res.status(404).json({message: "Data Not Found"});
    }

    res.status(200).json(getUser);
  }
  catch(err) {
    res.status(500).json({message: err.message});
  }
}

// Get Single Data
export const getUserData = async (req, res) => {
  try {
    const keyId = Number(req.params.id);
    const getUser = await UserData.findOne({id: keyId});

    if (!getUser) {
      res.status(404).json({message: "The Data is Not In the Database"});
    }
  
    res.status(200).json(getUser);
  }
  catch(err) {
    res.status(500).json({message: err.message});
  }
}


// Create UserData
export const createUserData = async (req, res) => {
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
    res.status(500).json({message: err.message});
  }
}

// Update UserData
export const updateUserData = async (req, res) => {
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
    res.status(500).json({message: err.message});
  }
}

// Delete UserData
export const deleteUserData = async (req, res) => {
  try {
    const keyId = Number(req.params.id);
    const deleteData = await UserData.findOneAndDelete({id: keyId});

    if (!deleteData) {
      return res.status(404).json({err: "Cannot Delete the Data"});
    }
    res.status(200).json({message: "Delete Data Successfully!!"});
  }
  catch(err) {
    res.status(500).json({message: err.message});
  }
}
