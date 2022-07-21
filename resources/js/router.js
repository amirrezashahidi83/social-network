import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

function App(){
	return(
		<BrowserRouter>
			<Routes>
						<Route exact path='/dashboard' element={< Dashboard />} />
						<Route path='/profile/:id' element={< Profile />} />
			</Routes>
		</BrowserRouter>
		);

}

export default App;
ReactDOM.render(<App/>,document.getElementById('index'));