const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB connected"))
	.catch((err) => {
		console.log(err);
	});

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend server is running");
});