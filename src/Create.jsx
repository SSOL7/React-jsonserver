import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
    const [values, setValues] = useState({
        origins: '',
        name: '',
        ingredients: '',
        instructions: '',
        image: ''
    });

    const navigate = useNavigate();

    const handlesubmit = e => {
        e.preventDefault();
        console.log(values);
        axios.post('http://localhost:8000/recipe', values).then(response => {
            console.log(response);
            navigate('/');
        }).catch(error => {
            console.log(error);

        })
    }

  return (
    <div>
      <h3>Add a recipe</h3>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Origins: </label>
          <input
          type="text"
          name="origins"
          placeholder="Enter origins"
          onChange={e => setValues({...values, origins: e.target.value})}
          />

        </div>

        <div>
          <label>Name: </label>
          <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={e => setValues({...values, name: e.target.value})}
          />

        </div>

        <div>
          <label>Ingredients: </label>
          <input
            type="text"
            name="ingredients"
            placeholder="Enter ingredients"
            onChange={e => setValues({...values, ingredients: e.target.value})}
          />

        </div>

        <div>
          <label>Instructions: </label>
          <input
            type="text"
            name="instructions"
            placeholder="Enter instructions"
            onChange={e => setValues({...values, instructions: e.target.value})}
          />

        </div>

        <div>
            <label>Image: </label>
            <input
            type="file"
            name="image"
            placeholder="Enter image"
            onChange={e => setValues({...values, image: e.target.value})}
            />
            </div>

        <button>Submit</button>
        <Link to="/">Back</Link>

      </form>
    </div>
  );
}

export default Create;
