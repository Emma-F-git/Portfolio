import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    name: String,
    firstname: String,
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, "Adresse email invalide"],
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
