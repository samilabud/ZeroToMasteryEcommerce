const express = require("express");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");

//usar el .env si no estamos en produccion, de lo contrario setear las variables en produccion tipo:
//heroku config:set STRYPE_SECRET_KEY=1234
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const stripe = require("stripe")(process.env.STRYPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 2500;

//Middelwares
app.use(express.urlencoded({ extended: false })); //parsear el request por post y html por form url encoded
app.use(express.json()); //parsear el request por json
if (process.env.NODE_ENV === "production") {
  app.use(compression());
  // app.use(enforce.HTTPS({trustProtoHeader:true}));
  // app.use(express.static(path.join(__dirname, 'client/build')));
  // app.get('*', function(req, res){
  //     res.sendFile(path.join(__dirname,'client/build','index.html'));
  // })
}

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server running on port " + port);
  console.log("Enviroment", process.env.NODE_ENV);
});
app.get("/", (req, res) => {
  res.send("working!");
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", function (req, res) {
  try {
    const { amount } = req.body;

    const paymentIntent = stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return res.status(200).send({
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send({
      statusCode: 400,
      body: JSON.stringify({ error }),
    });
  }
});
