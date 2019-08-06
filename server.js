const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require("./routes/api/users");
const ow = require("./routes/api/ow");

app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

const MONGODB_URI =
	process.env.MONGODB_URI ||
	"mongodb://localhost/project3" ||
	"mongodb://heroku_z9wstwkk:winnable123@ds115352.mlab.com:15352/heroku_z9wstwkk";

mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(() => console.log("MongoDB connected successfully"))
	.catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
	})
}

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.use("/api/ow", ow);

const PORT = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}!`));
