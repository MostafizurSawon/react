import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: []
  },
  reducers: {
    changeSearchTerm(state, action){
      state.searchTerm = action.payload;
    },
    addCar(state, action){
      // Assumption
      // action.payload === { name: 'abc', cost: 500}
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    }
  }
})

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;