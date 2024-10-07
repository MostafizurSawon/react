import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { reset } from './actions';

// console.log(reset());
// console.log(reset.toString());

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  }
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
// export const { addSong, removeSong } = songsSlice.actions;
// export const { addMovie, removeMovie } = moviesSlice.actions;
// export const { addMovie, removeMovie, reset } = moviesSlice.actions;

// console.log(moviesSlice.actions.reset.toString());

// console.log(songsSlice.actions.addSong());

// console.log(store);

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(
//   // type: "song/addSong",
//   // payload: "New Song!!!"

//   songsSlice.actions.addSong('Some random song!')
// );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

