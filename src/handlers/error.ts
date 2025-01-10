export const errorHandler = (error, req, res, next) => {
	if (error.type === "auth") {
		res.status(401).json({ message: "You are not authorized" });
	} else if (error.type === "input") {
		res.status(400).json({ message: "Invalid input" });
	} else {
		res.status(500).json({ message: "Internal server error" });
	}
};
