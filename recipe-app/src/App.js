import React, { useState } from 'react'
import axios from 'axios'
import './App.css';
import RecipeList from './components/RecipeList.js';

function App() {

  const [input, setInput] = useState('')
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)

  const searchRecipe= async()=>{
    if(input.trim === '') return

    setLoading(true)
    const API_URl = process.env.REACT_APP_RECIPE_API_URL
    const API_KEY = process.env.REACT_APP_RECIPE_API_KEY

    
       try {
        const response = await axios.get(
         `${API_URl}`,
         {
           params:{
            query: input || 'Pasta with Garlic',
            number: 13,
            apiKey: API_KEY,
             
           }
         }
       )
       console.log('API Response:', response.data);
       console.log('API Response:', response.data.results); // Check the API response
    if (Array.isArray(response.data.results)) {
      setRecipes(response.data.results); // Set state only if it's an array
    } else {
      console.error('API did not return an array:', response.data.results);
    }
       setRecipes(response.data.results)
       console.log('Updated Recipes State:', response.data.results || []);
       } catch (error) {
        console.error('Error fetching recipes:', error);
       }
       setLoading(false)
  }

  return (
    <div className="App">
      <h1 style={{ fontFamily: 'Arial, sans-serif', color: '#4CAF50', textAlign: 'center', marginTop: '20px' }}>Recipes App</h1>
      <input 
      style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
      value={input}
      placeholder='Enter Ingredients'
      type='text'
      onChange={(e)=>setInput(e.target.value)}
      />
      <button 
      style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer' }}
      onClick={searchRecipe}
      >
        Search
      </button>

      {loading ? (
        <p>Loading Recipes...</p>
      ): (
        <RecipeList recipes={recipes}/>
      )}
    </div>
  );
}

export default App;
