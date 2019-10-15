const express = require('express');

const Recipes = require('../models/recipe-model');

const router = express.Router();

router.get('/' ,(req,res)=>{
    Recipes.get()
    .then(recipes=>{
        res.json(recipes)
    })
    .catch(err =>{
        res.status(500).json({message:'Failed to get recipe'})
    })
})

router.get('/:id' ,(req,res) =>{
    const { id } = req.params;
    
  Recipes.getById(id)
  .then(recipe => {
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json(err,{ message: 'Failed to get recipe' });
  });
})
router.get('/:id/instructions', (req, res) => {
      const{ id } = req.params;

     Recipes.getInstructions(id)
    .then(instructions => {
    if (instructions.length) {
      res.json(instructions);
    } else {
      res.status(404).json({ message: 'Could not find instructions for given recipe id' })
    }
  })
  .catch(err => {
    res.status(500).json(err,{ message: 'Failed to get instructions' });
  });
});





module.exports =router