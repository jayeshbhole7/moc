const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://minor:project@minor.ncwcubx.mongodb.net/?retryWrites=true&w=majority&appName=minor", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
