const mongoose = require('mongoose');

const UserDataSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      default: 0,
    },
    question: {
      type: String,
      required: [true, "Please Provide the Question!"],
    },
    code: {
      type: String,
      required: [true, "Please Provide the Code!"],
    }
  },
  {
    timestamps: true,
  }
)

const UserData = mongoose.model("user", UserDataSchema);

module.exports = UserData;