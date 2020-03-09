import React from 'react';
import { useSelector } from "react-redux";
import Meme from './Meme';


function MemesList() {
  const memes = useSelector(store => store.memes)
  return (
    <div>
      <h1>Memes List</h1>
      <section className="MemesList">
        {memes.map(meme => <Meme meme={meme} key={meme.id} />)}
      </section>
    </div>
  )
}

export default MemesList;