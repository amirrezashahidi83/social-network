import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App(){
	return(
		<BrowserRouter>
			<Routes>
						<Route exact path='/dashboard' element={< Dashboard />} />
			</Routes>
		</BrowserRouter>
		);

}

export default App;
ReactDOM.render(<App/>,document.getElementById('index'));