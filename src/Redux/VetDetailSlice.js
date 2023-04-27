import { createSlice } from "@reduxjs/toolkit";

const initialState={vetInfo:{}};

const VetDetailSlice=createSlice({

    name:"vetSignup",
    initialState,
    reducers:{
        setVetDetails(state,actions){
            state.vetInfo=actions.payload;
        },
    }

});
export const { setVetDetails } = VetDetailSlice.actions;
export default VetDetailSlice.reducer;