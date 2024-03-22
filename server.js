const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan")
const rateLimit = require("express-rate-limit")
const compression = require('compression');

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

const emailsRouter = require("./routes/emails");

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(limiter)
app.use(compression());

app.use("/emails", emailsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3001);
