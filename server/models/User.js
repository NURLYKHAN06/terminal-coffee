const { Schema, model } = require("mongoose");

const ItemSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  orders: [
    {
      item: ItemSchema,
      quantity: { type: Number, required: true },
    },
  ],
});

const UserModel = model("User", UserSchema, "users");

module.exports = {
  UserModel,
};
