import axios from 'axios';
import React, { Component } from 'react';


class UploadData extends Component {

	state = {
		selectedFile: null
	};

	onFileChange = event => {
		this.setState({ selectedFile: event.target.files[0] });
	};

	onFileUpload = () => {
		const formData = new FormData();
		formData.append('file', this.state.selectedFile);
		console.log(this.state.selectedFile);
		axios.post("http://localhost:8000/upload", formData).then(function (response) {window.alert(response.data.status)});
	};

	fileData = () => {

		if (this.state.selectedFile) {

			return (
				<div>
					<h2>File Details:</h2>
					<p>File Name: {this.state.selectedFile.name}</p>

					<p>File Type: {this.state.selectedFile.type}</p>

					<p>
						Last Modified:{" "}
						{this.state.selectedFile.lastModifiedDate.toDateString()}
					</p>

				</div>
			);
		} else {
			return (
				<div>
					<br />
					<h4>Choose File To Upload</h4>
				</div>
			);
		}
	};

	render() {
		const myStyle= {
			align: 'center'			
		};
		return (
			<div style={{myStyle}}>
				<h3>
					UPLOAD CSV
				</h3><br></br>
				<div>
					<input type="file" onChange={this.onFileChange} />
					<button onClick={this.onFileUpload}>
						Upload
					</button>
				</div>
				{this.fileData()}
			</div>
		);
	}
}

export default UploadData;
