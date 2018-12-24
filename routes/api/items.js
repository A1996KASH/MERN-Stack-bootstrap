const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Items');

// @route GET api/items
// @ desc Get the All Items
// @ access Public 
router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items));
})


// @route POST api/items
// @ desc  Create a Item
// @ access Public 
router.post('/', (req, res) => {
    const newItem =  new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
})


// @route Delete api/items/:id
// @ desc  Delete a Ttem
// @ access Public 
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then(item => item.remove().then(()=>releaseEvents.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;