// jshint esversion:6
const express = require("express");
const { urlencoded } = require("body-parser");
const date = require(__dirname + "/date.js");

const port = 4000;

const app = express();

// Globals
const items = ["By Food", "Get Food", "Post Food"];
const workItems = [];

// app.use(bodyParser.urlencoded({extended: true}))
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// -------------- Get Request form Home
app.get("/", (req, res) => {
	const day = date.getDate();

	console.dir(req.query);

	res.render("list", { listTitle: day, newListItem: items });
});

// -------------- Post Request form Home
app.post("/", (req, res) => {
	let item = req.body.newItem;
	if (req.body.list === "Work List") {
		// Redirecting items to render engine - for work
		workItems.push(item);
		res.redirect("/work");
	} else {
		// Redirecting items to render engine - for home
		items.push(item);
		res.redirect("/");
	}
});

// -------------- Get Request form Work
app.get("/work", (req, res) => {
	res.render("list", { listTitle: "Work List", newListItem: workItems });
});

// -------------- Post Request from Work
app.post("/work", (req, res) => {
	let item = req.body.newItem;
	workItems.push(item);
	res.redirect("/work");
});

// --------------- About page route
app.get("/about", (req, res) => {
	res.render("about");
});
// App is listening
app.listen(port, () =>
	console.log(`Server started on http://localhost:${port}`)
);
