import React from 'react';
import './Meme.css';
import { useDispatch } from "react-redux";

function Meme({meme}) {
  const {topText, bottomText, url, id} = meme;
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch({type: 'DELETE_MEME', payload: {id} });
  }

  return (
    <div className="meme" id={id}>
      <h2 className="caption top-caption">{topText}</h2>
      <h3 className="caption bottom-caption">{bottomText}</h3>
      <img src={url} alt={topText} className="img-thumbnail"/>
      <div className="close-button" onClick={handleDelete}>CLICK TO DELETE</div>
    </div>
  )
}

export default Meme;