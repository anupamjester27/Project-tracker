const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = () => {
  mongoose.set("useCreateIndex", true);
  mongoose.connect(
    "mongodb+srv://arpit:admin@123@cluster0.qlrln.mongodb.net/Cluster0?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  //mongoose.connect('mongodb://localhost:27017');
  mongoose.connection.on("open", () => {
    console.log("Connection OK");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Connection Fail", err);
  });
};
