import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
//   const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setValues] = useState({
    origins: "",
    name: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/recipe/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .then(console.log(values))
      .catch((err) => console.log(err));
  }, [id]);

    const handleupdate = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/recipe/" + id, values)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        navigate('/');
    }

  return (
    <div>
      <form onSubmit={handleupdate} >
        <h2>Update recipe</h2>
        <div>
          <label>Origins: </label>
          <input
            type="text"
            name="origins"
            placeholder="Enter origins"
            value={values.origins}
            onChange={(e) => setValues({ ...values, origins: e.target.value })}
          />
        </div>

        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>

        <div>
          <label>Ingredients: </label>
          <input
            type="text"
            name="ingredients"
            placeholder="Enter ingredients"
            value={values.ingredients}
            onChange={(e) =>
              setValues({ ...values, ingredients: e.target.value })
            }
          />
        </div>

        <div>
          <label>Instructions: </label>
          <input
            type="text"
            name="instructions"
            placeholder="Enter instructions"
            value={values.instructions}
            onChange={(e) =>
              setValues({ ...values, instructions: e.target.value })
            }
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

        <button>Update</button>
        <Link className="delete" to="/">Back</Link>
      </form>
    </div>
  );
}

export default Update;
