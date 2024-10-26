import React from 'react'
import RecipeCard from './RecipeCard.js'

const RecipeList = ({recipes = []}) => {
  console.log('Recipes in recipeList:', recipes); // Log the recipes data

  // if (!Array.isArray(recipes) || recipes.length === 0) {
  //   return <div>No recipes found.</div>;
  // }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px'}}>
        {recipes.map((recipe)=>(
            <RecipeCard 
                key={recipe.id}
                recipe={recipe}
            />
        ))}
    </div>
  )
}

export default RecipeList