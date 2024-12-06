import { Router } from "express";
import Product from "../models/productsModel.js";
const router = new Router();

router.get("/", async (req, resp) => {
  const products = await Product.find({});
  resp.status(200).json(products);
});

router.get("/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return resp.status(404).send("Product not found");
    }
    resp.status(200).json(product);
  } catch (err) {
    resp.status(500).send(`Bad request err ${err}`);
  }
});

router.post("/", async (req, resp) => {
  try {
    const newproduct = new Product(req.body);
    await newproduct.save(newproduct);
    resp.status(201).json(newproduct);
  } catch (err) {
    resp.status(400).send("Bad request");
  }
});

router.put("/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return resp.status(404).send("Product not found");
    }
    resp.status(200).json(updatedProduct);
  } catch (err) {
    resp.status(400).send(`Bad request ${err}`);
  }
});

router.delete("/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    console.log("Attempting to delete product with ID:", id);
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      resp.status(404).send("product not found");
    }

    resp.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (err) {
    resp.status(400).json({ message: "An error occurred", error: err.message });
  }
});

router.delete("/", async (req, resp) => {
  try {
    const deletedProducts = await Product.deleteMany({});
    if (!deletedProducts.deletedCount === 0) {
      resp.status(404).json({ message: "No products found to delete" });
    }

    resp.status(200).json({
      message: "Products deleted successfully",
      product: deletedProducts,
    });
  } catch (err) {
    resp.status(400).json({ message: "An error occurred", error: err.message });
  }
});

export default router;
