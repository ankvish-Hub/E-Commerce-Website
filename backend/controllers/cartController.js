import userModel from "../models/userModel.js";

// Add product to cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    if (!userId || !itemId || !size) {
      return res.json({
        success: false,
        message: "Missing required fields",
      });
    }

    const userData = await userModel.findById(userId);

    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Update cart quantity
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    if (!userId || !itemId || !size || quantity < 0) {
      return res.json({
        success: false,
        message: "Invalid data",
      });
    }

    const userData = await userModel.findById(userId);

    let cartData = userData.cartData || {};

    if (quantity <= 0) {
      if (cartData[itemId]) {
        delete cartData[itemId][size];
        if (Object.keys(cartData[itemId] || {}).length === 0) {
          delete cartData[itemId];
        }
      }
    } else {
      if (!cartData[itemId]) {
        cartData[itemId] = {};
      }
      cartData[itemId][size] = quantity;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get user cart
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);

    let cartData = userData.cartData || {};

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };