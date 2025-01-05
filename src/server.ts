import express from "express";
import router from "./router";

const app = express();

app.get("/", (req, res) => {
	const responseObject = {
		title: "Hello World",
		source: "express server",
	};
	res.status(200);

	res.json(responseObject);
});

app.use("/api", router);

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
