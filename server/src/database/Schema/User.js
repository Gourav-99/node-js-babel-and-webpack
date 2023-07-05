import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    todoList: [
      {
        title: {
          type: String,
        },
        isComplete: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
UserSchema.virtual("Name").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

export const User = mongoose.model("User", UserSchema);
