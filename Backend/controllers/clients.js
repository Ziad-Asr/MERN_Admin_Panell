import ProductStat from "../models/ProductStat.js";
import Product from "./../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    // ((One to one Relation))
    // ***{{ Aggrigation }}*** =====>>>>> ((JOIN)) in SQL databases
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc, // data in the object of the selected product in the map function
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
