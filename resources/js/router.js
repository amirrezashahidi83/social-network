import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Signup from './components/auth/SignUp';
import Signin from './components/auth/SignIn';

function App(){
	return(
		<BrowserRouter>
			<Routes>
						<Route exact path='/dashboard' element={< Dashboard />} />
						<Route path='/profile/:id' element={< Profile />} />
						<Route path='/signup' element={< Signup />} />
						<Route path='/signin' element={< Signin />} />
			</Routes>
		</BrowserRouter>
		);

}

export default App;
ReactDOM.render(<App/>,document.getElementById('index'));