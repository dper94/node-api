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
import {
	createUpdate,
	deleteUpdate,
	getUpdate,
	getUpdates,
	updateUpdate,
} from "./handlers/update";

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

router.get("/updates", getUpdates);
router.get("/updates/:id", getUpdate);
router.put(
	"/updates/:id",
	body("title").optional().isString(),
	body("body").optional().isString(),
	body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
	body("version").optional(),
	updateUpdate,
);
router.post(
	"/updates",
	body("title").exists().isString(),
	body("body").exists().isString(),
	body("productId").exists().isString(),
	createUpdate,
);
router.delete("/updates/:id", deleteUpdate);

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
