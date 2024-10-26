import React from 'react'

const RecipeCard = ({recipe}) => {
  console.log('Recipe Data in Card:', recipe);  
  if (!recipe) return null;
  return (
    <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px', textAlign: 'center', maxWidth: '300px', margin: '10px' }}>
        {recipe.image && 
        <img 
            src={recipe.image} 
            alt={recipe.title}
            style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }}
        />}
        <h3 style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>{recipe.title}</h3>
        
    </div>
  )
}

export default RecipeCard