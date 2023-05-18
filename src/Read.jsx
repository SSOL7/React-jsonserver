import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/recipe/" + id)
      .then((res) => setData(res.data))
      .then(console.log(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h3>Recipe id: {data.id}</h3>

      <div>
        Origins: <strong>{data.origins}</strong>
      </div>

      <div>
        Name: <strong>{data.name}</strong>
      </div>

      <div>
        Ingredients: <strong>{data.ingredients}</strong>
      </div>

      <div>
        Instructions: <strong>{data.instructions}</strong>
      </div>

      <div>
        <strong>{data.image}</strong>
      </div>

        <div className="buttons">

        <Link className="update" to={`/update/${id}`}>Edit</Link>
        <br />
        <Link className="delete" to={`/`}>Back</Link>
        </div>

    </div>
  );
}

export default Read;
