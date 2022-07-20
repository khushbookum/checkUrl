const express = require("express");
const route = require("./routes/route.js");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://kimmi_kumari:kimmi@cluster0.mfdc6.mongodb.net/kimmi-project4?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.use((req, res) => {
  res.status(404).send({
    status: false,
    error: `Please Enter a Url first ${req.url}`,
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
