const express = require('express');
const db = require('../models');
const router = express.Router();

const errMessage = { message: 'Please try again' };


router.get('/', async (req, res) => {
  try {
    const allPeeps = await db.Peep.findAll();
  
    res.json(allPeeps);
  } catch (err) {
    res.json(errMessage);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const foundPeep = await db.Peep.findByPk(req.params.id);
  
    res.json(foundPeep);
  } catch (err) {
    res.json(errMessage);
  }
});


router.post('/', async (req, res) => {
  try {
    const createdPeep = await db.Peep.create(req.body);
  
    res.json(createdPeep);
  } catch (err) {
    res.json(errMessage)
  }
});


router.put('/:id', async (req, res) => {
  try {
    const updatedPeep = await db.Peep.update(
      req.body,
      {
        where: { id: req.params.id },
        returning: true
      }
    );
  
    res.json(updatedPeep[1][0]);
  } catch (err) {
    res.json(errMessage)
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const deletedPeep = await db.Peep.destroy({
      where: { id: req.params.id }
    });
    
    res.json({ deleted: true });
  } catch (err) {
    res.json(errMessage)
  }
})

module.exports = router;
