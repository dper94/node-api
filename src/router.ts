import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
	createProduct,
	deleteProduct,
	getProduct,
	getProducts,
	updateProduct,
} from "./handlers/product";

const router = Router();

/**
 * Product
 */

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.put(
	"/products/:id",
	[body("name").isString(), handleInputErrors],
	updateProduct,
);
router.post(
	"/products",
	[body("name").isString(), handleInputErrors],
	createProduct,
);
router.delete("/products/:id", deleteProduct);

/**
 * Update
 */

router.get("/updates", () => {});
router.get("/updates/:id", () => {});
router.put(
	"/updates/:id",
	body("title").optional().isString(),
	body("body").optional().isString(),
	body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
	body("version").optional(),
	() => {},
);
router.post(
	"/updates",
	body("title").exists().isString(),
	body("body").exists().isString(),
	() => {},
);
router.delete("/updates/:id", () => {});

/**
 * UpdatePoint
 */

router.get("/update-points", () => {});
router.get("/update-points/:id", () => {});
router.put(
	"/update-points/:id",
	body("name").optional().isString(),
	body("description").optional().isString(),
	() => {},
);
router.post(
	"/update-points",
	body("name").exists().isString(),
	body("description").exists().isString(),
	body("updateId").exists().isString(),
	() => {},
);
router.delete("/update-points/:id", () => {});
export default router;
