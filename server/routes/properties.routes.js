const router = require("express").Router();
const PropertyServices = require("../services/Property.services");
const verifyAccessToken = require("../middleware/verifyAccessToken");
const upload = require("../utils/upload");

router.get("/", async (req, res) => {
  try {
    const properties = await PropertyServices.getAllProperties(req.query);
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
    return;
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post(
  "/",
  verifyAccessToken,
  upload.single("photo"),
  async (req, res) => {
    try {
      const userId = res.locals.user.id;
      const { categoryId, title, price, description, photo, address } =
        req.body;

      let pathImages = "";
      if (!req.file) {
        pathImages =
          "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
      } else {
        pathImages = "/img/" + req.file.filename;
      }

      const property = await PropertyServices.createProperty({
        categoryId,
        userId,
        title,
        price,
        description,
        photo: pathImages,
        address,
      });

      res.status(201).json({ message: "success", property });
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  }
);

router.put(
  "/:id",
  verifyAccessToken,
  upload.single("photo"),
  async (req, res) => {
    try {
      const userId = res.locals.user.id;
      const { id } = req.params;
      const { categoryId, title, price, description, photo, address } =
        req.body;
      let property = await PropertyServices.getPropertyById(id);

      let pathImages = property.photo;

      if (req.file) {
        pathImages = "/img/" + req.file?.filename;
      }
      if (property) {
        property = await PropertyServices.updateProperty({
          id,
          userId,
          categoryId,
          title,
          price,
          description,
          photo: pathImages,
          address,
        });

        res.status(200).json({ message: "success", property });
        return;
      }
      res.status(400).json({ message: "Property is not found" });
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  }
);

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
