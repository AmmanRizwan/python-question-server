import Code from '../model/code.model.js';

// Get All UserData
const getCodeData = async (req, res) => {
  try {
    const userCodeData = await Code.find({UserId: req.user._id});

    if (!userCodeData) {
      return res.status(404).json({message: "Not Data Found"});
    }

    res.status(200).json(userCodeData);
  }
  catch(err) {
    res.status(400).json({message: err.message});
  }
}

// Get Single Data
const getSingleCodeData = async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await Code.findById(id);

    if (!getUser) {
      res.status(404).json({message: "The Data is Not In the Database"});
    }
  
    res.status(200).json(getUser);
  }
  catch(err) {
    res.status(500).json({message: err.message});
  }
}


const createCodeData = async (req, res) => {
  try {
    const { language, question, code } = req.body;
    const codeData = await Code.create({
      UserId: req.user._id,
      language: language,
      question: question,
      code: code
    })

    if (!codeData) {
      return res.status(404).json({messsage: "Invalid Data"});
    }

    res.status(201).json({
      message: "Successfully Create the Data"
    })
  }
  catch (err) {
    res.status(401).json({message: err.message});
  }
}

// Update UserData
const updateCodeData = async (req, res) => {
  try {
    const { id } = req.params;

    const codeData = await Code.findById({_id: id});

    if (codeData) {
      codeData.language = req.body.language || codeData.language;
      codeData.question = req.body.question || codeData.question;
      codeData.code = req.body.code || codeData.code;
    }

    const updateData = await codeData.save();
    
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
const deleteCodeData = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteData = await Code.findOneAndDelete({_id: id});

    if (!deleteData) {
      return res.status(404).json({err: "Cannot Delete the Data"});
    }
    res.status(200).json({message: "Delete Data Successfully!!"});
  }
  catch(err) {
    res.status(500).json({message: err.message});
  }
}

export { getCodeData, getSingleCodeData, createCodeData, deleteCodeData, updateCodeData };