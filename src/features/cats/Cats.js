import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  const catPics = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>CatBook</h1>
      <ul>
        {catPics.status === 'loading' ? <p>Loading...</p> : catPics.entities.map(c => <CatList key={c.id} url={c.url}/>)}
      </ul>
    </div>
  );
}

export default Cats;