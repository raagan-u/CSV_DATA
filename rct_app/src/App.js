import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'

import UploadData from './UploadData';
import GetData from './GetData';

function App() {
	return (
		<div className='App'>
		<header>
			<label class="logo">CSV_DATA</label>
			<nav>
				<ul class="nav_links">
					<li><a href='/UploadData'><button>UPLOAD</button></a></li>
					<li><a href='/viewData'><button>VIEW</button></a></li>
				</ul>
			</nav>
		</header>
			<Routes>
				<Route exact path='/UploadData' element={<UploadData />}></Route>
				<Route exact path='/viewData' element={<GetData />}></Route>
			</Routes>
			
		</div>
	);
}

export default App;