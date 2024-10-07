import { configureStore, createSlice, createAction } from '@reduxjs/toolkit';

export const reset = createAction("app/reset");

// console.log(reset());
// console.log(reset.toString());

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action){
      state.push(action.payload);
    },
    removeMovie(state, action){
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
    

    // reset(state, action){
    //   return [];
    // }
  },
  extraReducers(builder){
    builder.addCase(reset, (state, action) =>{
      return [];
    });
  }
});

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action){
      state.push(action.payload);
    },
    removeSong(state, action){
      // action.payload === string, the song we want to remove
      const index= state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder){
    // builder.addCase(moviesSlice.actions.reset, (state,action)=>{
    //   return [];
    // });
    builder.addCase(reset, (state, action) =>{
      // state -> array of songs
      return [];
    });
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  }
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
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

