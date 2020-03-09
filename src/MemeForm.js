import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import {v4 as uuid} from 'uuid';

function CreateMeme() {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    topText: '',
    bottomText: '',
    url: '',
    id: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE);

  function submitMeme(evt) {
    evt.preventDefault();
    let payload = {...formData, id:uuid()}
    dispatch({type: 'ADD_MEME', payload });
    setFormData(INITIAL_STATE);
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value})
  }
  return (
    <div className="CreateMeme">
      <h1>Add Meme</h1>
      <form onSubmit={submitMeme}>
        <div className="form-group">
          <label htmlFor="topText">Top Text</label><br />
          <input  className="form-control" id="topText" type="text" name="topText" value={formData.topText} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="bottomText">Bottom Text</label>
          <input className="form-control" id="bottomText" type="text" name="bottomText" value={formData.bottomText} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL</label><br />
          <input className="form-control" id="url" type="text" name="url" value={formData.url} onChange={handleChange} />
        </div>
        <input type="submit" value="Submit Meme" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default CreateMeme;