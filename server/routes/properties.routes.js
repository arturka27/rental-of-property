const router = require("express").Router();
const PropertyServices = require("../services/Property.services");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router.get("/", async (req, res) => {
  try {
    const properties = await PropertyServices.getAllProperties();
    res.status(200).json({ message: "success", properties });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const property = await PropertyServices.getPropertyById(id);
    res.status(200).json({ message: "success", property });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", verifyAccessToken, async (req, res) => {
  const userId = res.locals.user.id;
  const { categoryId, title, price, description, photo, address } = req.body;
  const property = await PropertyServices.createProperty({
    categoryId,
    userId,
    title,
    price,
    description,
    photo,
    address,
  });

  res.status(201).json({ message: "success", property });
});

router.put("/:id", verifyAccessToken, async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const { id } = req.params;
    const { categoryId, title, price, description, photo, address } = req.body;

    let property = await PropertyServices.getPropertyById(id);
    if (property) {
      property = await PropertyServices.createProperty({
        categoryId,
        userId,
        title,
        price,
        description,
        photo,
        address,
      });

      res.status(200).json({ message: "success", character });
      return;
    }
    res.status(400).json({ message: "Property is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete("/:id", verifyAccessToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = res.locals.user.id;
    let property = await PropertyServices.getPropertyById(id);
    if (property) {
      property = await PropertyServices.deleteProperty(id, userId);
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "Property is not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
