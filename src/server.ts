import express from "express";
import router from "./router";
import { protect } from "./modules/auth";
import { createNewUser, loginUser } from "./handlers/user";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	const responseObject = {
		title: "Hello World",
		source: "express server",
	};
	res.status(200);

	res.json(responseObject);
});

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/login", loginUser);

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
