import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Signup from './components/auth/SignUp';
import Signin from './components/auth/SignIn';
import NewPost from './components/Settings';
import ViewPost from './components/ViewPost';

function App(){
	return(
		<BrowserRouter>
			<Routes>
						<Route exact path='/dashboard' element={< Dashboard />} />
						<Route path='/profile/:id' element={< Profile />} />
						<Route path='/signup' element={< Signup />} />
						<Route path='/signin' element={< Signin />} />
						<Route path='/newpost' element={< NewPost />} />
						<Route path='/viewpost/:post_id' element={<ViewPost />} />
			</Routes>
		</BrowserRouter>
		);

}

export default App;
ReactDOM.render(<App/>,document.getElementById('index'));