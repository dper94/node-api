import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const comparePassword = async (password, hash) => {
	return await bcrypt.compare(password, hash);
};

export const hashPassword = async (password) => {
	return await bcrypt.hash(password, 10);
};

export const createJWT = (user) => {
	const token = jwt.sign(
		{ id: user.id, username: user.username },
		process.env.JWT_SECRET,
		{
			expiresIn: "1h",
		},
	);
	return token;
};

export const protect = (req, res, next) => {
	const bearer = req.headers.authorization;

	if (!bearer) {
		res.status(401).json({ message: "You are not authorized" });
		return;
	}

	const [_, token] = bearer.split(" ");

	if (!token) {
		res.status(401).json({ message: "invalid token" });
		return;
	}

	try {
		const user = jwt.verify(token, process.env.JWT_SECRET);
		req.user = user;
		next();
	} catch (error) {
		console.error(error);
		res.status(401).json({ message: "invalid token" });
		return;
	}
};
