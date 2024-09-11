const router = require("express").Router();
// const { query } = require("express");
const CategoryService = require("../services/Categories.services")


//getAll category
router.get('/', async (req, res) => {
    try {
        const category = await CategoryService.getAllCategory()
        res.status(200).json({ message: "success", category });
    } catch ({message}) {
        console.log(message, 'error categories get');
        res.status(500).json({message})
    }
})

//getOne category
router.get("/:categoryId", async (req, res) => {
    try {
        const { categoryId } = req.params
        const category = await CategoryService.getOneCategory(+categoryId);
        if(category) {
            res.status(200).json({ message: 'success', category})
            return
        }
    } catch ({message}) {
        console.log(message, 'error categories get');
        res.status(500).json({message})
    }
});

module.exports = router;
