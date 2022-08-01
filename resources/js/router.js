import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import routes from './components/routes.js';

function App(){
	return(
		<BrowserRouter>
			<Routes>
				{routes.map((route)=>
					<Route 
					key={route.path} 
					path={route.path} 
					element={route.element} /> )}
			</Routes>
		</BrowserRouter>
		);

}

export default App;
ReactDOM.render(<App/>,document.getElementById('index'));