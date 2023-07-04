import axios from 'axios';
import React , {useState, useEffect} from 'react';


function GetData () {
	useEffect(() => {
		retrieve();
   	}, []);

	const [data, setData] = useState([]);
	const retrieve = () => {
		axios.get("http://localhost:8000/data").then((response) => {
			const alldata = response.data.alldata;
			setData(alldata);
		})
	}

	return (
		<div>
		<table>
  		<thead>
    		<tr>
      		<th>Index</th>
      		<th>Datetime</th>
      		<th>Close</th>
      		<th>High</th>
			<th>Low</th>
			<th>Open</th>
			<th>Volume</th>
			<th>Instrument</th>
    		</tr>
  		</thead>
  		<tbody>
    		{data.map((item,index) => {
      			return (
        		<tr key={index} style={{color: '#e6c7c7'}}>
				<td> {index}</td>
				<td> {item.datetime}</td>
          		<td>{ item.close }</td>
          		<td>{ item.high }</td>
				<td> { item.low }</td>
				<td> {item.open}</td>
				<td> {item.volume}</td>
				<td> {item.instrument}</td>
        		</tr>
      		);
    		})}
  		</tbody>
		</table>	
		</div>
	);

}

export default GetData;
