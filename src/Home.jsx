import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/recipe').then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);

    const handledelete = (id) => {
        axios.delete('http://localhost:8000/recipe/' + id)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        setData(data.filter(recipe => recipe.id !== id));
    }


  return (
    <div>
        <h1>TasteIT</h1>
        <h4>TasteIT is recipe app which is the final task for React basics course for REACT23K group</h4>

        <div className='recipes'>
            <Link className='create' to="/create">Create recipe</Link>
            {data.length === 0 && <div>No recipes</div>}
            {data.length > 0 && <div>Recipes: {data.length}</div>}
        </div>

        
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Origins</th>
                    <th>Name</th>
                    <th>Ingredients</th>
                    <th>Instructions</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {data.map((recipe) => (
                    <tr key={recipe.name}>
                        <td>{recipe.id}</td>
                        <td>{recipe.origins}</td>
                        <td>{recipe.name}</td>
                        <td>{recipe.ingredients}</td>
                        <td>{recipe.instructions}</td>
                        <td>{recipe.image}</td>
                        <td>
                            <Link className='read' to={`/read/${recipe.id}`}>Read</Link>
                            <Link className='update' to={`/update/${recipe.id}`}>Update</Link>
                            <button className='delete' onClick={e => handledelete(recipe.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home