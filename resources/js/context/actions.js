
export async function login(dispatch,credentials){
	
	dispatch({type:'REQUEST_LOGIN'});
	let response = await axios.post('/api/login',credentials);
	response.catch(function(error){
		dispatch({type:'LOGIN_ERROR',error:error});
	});

	if(response.data.user){
		dispatch({type:'LOGIN_SUCCESS'});
		localStorage.setItem('currentUser',JSON.stringify(data));
		return data;
	}

	
}

export async function register(dispatch,credentials){

	dispatch({type:'REQUEST_REGISTER'});
	let response = await.post('/api/register',credentials);
	response.catch(function(error){
		dispatch({type:'REGISTER_ERROR',error:error});
	});

	if(response.data.user){
		dispatch({type:'REGISTER_SUCCESS'});
	}
}

export function logout(dispatch){
	dispatch({type:'LOGOUT'});
	localStorage.removeItem('currentUser');
}



