import { comparePassword, createJWT, hashPassword } from "../modules/auth";
import prisma from "../modules/db";

export const createNewUser = async (req, res, next) => {
	try {
		const { username, password, email } = req.body;

		const user = await prisma.user.create({
			data: {
				username,
				password: await hashPassword(password),
				email,
			},
		});

		const token = createJWT(user);

		res.json({ token });
	} catch (error) {
		error.type = "input";
		next(error);
	}
};

export const loginUser = async (req, res, next) => {
	try {
		const { username, password } = req.body;

		const user = await prisma.user.findUnique({
			where: {
				username,
			},
		});

		if (!user) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const isValid = await comparePassword(password, user.password);

		if (!isValid) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = createJWT(user);

		res.json({ token });
	} catch (error) {
		error.type = "input";
		next(error);
	}
};
