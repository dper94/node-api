import prisma from "../modules/db";

// Get all products

export const getProducts = async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			id: req.user.id,
		},
		include: {
			products: true,
		},
	});

	res.status(200).json({ data: user.products });
};

// Get a single product

export const getProduct = async (req, res) => {
	const product = await prisma.product.findUnique({
		where: {
			id_userId: {
				id: req.params.id,
				userId: req.user.id,
			},
		},
	});
	res.status(200).json({ data: product });
};

// Create a product

export const createProduct = async (req, res, next) => {
	try {
		const { name } = req.body;

		const product = await prisma.product.create({
			data: {
				name,
				userId: req.user.id,
			},
		});

		res.status(201).json({ data: product });
	} catch (error) {
		next(error);
	}
};

// Update a product

export const updateProduct = async (req, res) => {
	const { name } = req.body;

	const product = await prisma.product.update({
		where: {
			id_userId: {
				id: req.params.id,
				userId: req.user.id,
			},
		},
		data: {
			name,
		},
	});

	res.status(200).json({ data: product });
};

// Delete a product

export const deleteProduct = async (req, res) => {
	const product = await prisma.product.delete({
		where: {
			id_userId: {
				id: req.params.id,
				userId: req.user.id,
			},
		},
	});

	res.status(200).json({ data: product });
};
