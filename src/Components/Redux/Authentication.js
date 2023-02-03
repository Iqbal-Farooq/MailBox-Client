import {createSlice} from '@reduxjs/toolkit';

// const AuthSlice= createSlice({
//     name:"Authentication",
//     initialstate:{islogin:false},
//     reducers:{
//         login(state){
//             state.islogin=true
//         }
//     }
// })

// export const AuthActions=AuthSlice.actions;

export const AuthSlice = createSlice({
  name: "authentication",
  initialState: {islogin:false ,token:'',loggedInEmail:localStorage.getItem('email'),},
  reducers: {
    login(state, action) {
        localStorage.setItem('token',action.payload.token)
        localStorage.setItem('email',action.payload.LoginEmail)
      state.token = action.payload.token;
      state.islogin=true;
    //   state.loggedInEmail=localStorage.getItem('email');
    },
    logout(state,action){
         state.token=action.payload;
      state.isLoggedin=false;
        localStorage.removeItem('token');
        localStorage.removeItem('email');

    },

  },
});

export const AuthActions=AuthSlice.actions;