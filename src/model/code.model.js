import mongoose from 'mongoose';

const CodeSchema = mongoose.Schema(
  {
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

const Code = mongoose.model("code", CodeSchema);

export default Code;