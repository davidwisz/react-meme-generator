import { createStore }  from 'redux';
const INITIAL_STATE = {memes: []};

function memeReducer(state=INITIAL_STATE, action) {

  switch (action.type) {
    case "ADD_MEME":
      return {...state, memes: [...state.memes, action.payload]};
    case "DELETE_MEME":
      let updatedMemes = state.memes.filter(meme => meme.id !== action.payload.id);
      return {...state, memes: updatedMemes};
    default:
      return state;
  }
}

const store = createStore(memeReducer);

export default store;

