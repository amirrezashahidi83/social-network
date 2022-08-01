import React,{useReducer} from 'react';

export const initialState = {
	userDetails: "",
	token: "",
	loading: false,
	errorMessage: null
}

export const AuthReducer = (initialState,action) =>{
	
	if(action.type == 'REQUEST_LOGIN'){
		
	}
	else if(action.type == 'LOGIN_SUCCESS'){

	}
	else if(action.type === 'LOGIN_FAILED'){

	}
	else if(action.type == 'LOGOUT'){

	}
	else if(action.type == 'REQUEST_REGISTER'){

	}
	else if(action.type == 'REGISTER_FAILED'){

	}

}