const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)


module.exports ={
    get,
    getById,
   getInstructions,

}
function get(){
    return db('recipe')
}

function getById(id){
    return db("recipe")
      .select(

        " recipe.name ",
        " recipe_ingredient.amount",
        " Measure.name",
        " ingredient.name",
        )
    .join( "recipe_ingredient","recipe.id","=","recipe_ingredient.recipe_id")
    .join("ingredient ","ingredient.id","=","recipe_ingredient.ingredient_id")
    .leftOuterJoin("measure ","measure.id","=","measure_id")
   
        .where("recipe.id",id)
}

function getInstructions(id){
    return db("recipe")
    .select(
        "recipe.id","recipe.instructions"
    )
    .where("recipe.id",id)
}