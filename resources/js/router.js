import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import routes from './components/routes.js';
import {AuthProvider} from './context/Context';

function App(){
	return(
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					{routes.map((route)=>
						<Route 
						key={route.path} 
						path={route.path} 
						element={route.element} /> )}
				</Routes>
			</BrowserRouter>
		</AuthProvider>
		);

}

export default App;
ReactDOM.render(<App/>,document.getElementById('index'));