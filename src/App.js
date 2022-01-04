import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';

function App() {

	let [title, titleChanger] = useState(['소리', '문법', '표현', '컨텐츠']);

	let [like, likeChanger] = useState([0, 0, 0, 0]);
		
	function increaseLike1(){
		let newlike = [...like]
		newlike[0] = newlike[0]+1
		likeChanger( 
			newlike
		);

		console.log(`like1 :` +newlike);
	}

	function increaseLike2(){
		let newlike = [...like]
		newlike[1] = newlike[1]+1
		likeChanger( 
			newlike
		);

		console.log(`like1 :` +newlike);
	}

	function increaseLike3(){
		let newlike = [...like]
		newlike[2] = newlike[2]+1
		likeChanger( 
			newlike
		);

		console.log(`like1 :` +newlike);
	}

	function increaseLike4(){
		let newlike = [...like]
		newlike[3] = newlike[3]+1
		likeChanger( 
			newlike
		);

		console.log(`like1 :` +newlike);
	}

	let likeIncreaser = [increaseLike1, increaseLike2, increaseLike3, increaseLike4];

	function list(){
		let i = 0;
		let len = title.length;
		let a = [];

		for ( i = 0; i < len; i++ ) {
			a.push
			(
				<div className='list'>
					<h2>
						{ title[i] }
					</h2>

					<span onClick={ likeIncreaser[i] }>
						👍 
					</span>

					<space></space>
					{like[i]}
					

					<p> 1월 2일 발행 </p>

					<hr/>
				</div>
			)
		}
		return a;
	}

	function changeTitle(){
		let newArr = [...title];
		newArr[0] = newArr[0] +1
		titleChanger( newArr );
		console.log(newArr);
	}
	
	function callAPI(firstName,lastName) {
		// instantiate a headers object
		var myHeaders = new Headers();
		// add content type header to object
		myHeaders.append("Content-Type", "application/json");
		// using built in JSON utility package turn object to string and store in a variable
		var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
		// create a JSON object with parameters for API call and store in a variable
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};
		// make API call with parameters and use promises to get response
		fetch("https://amxqc1r8cj.execute-api.ap-northeast-2.amazonaws.com/dev", requestOptions)
		.then(response => response.text())
		.then(result => alert(JSON.parse(result).body))
		.catch(error => console.log('error', error));
	}

	return (
		<div className="App">
			<div className="black-nav">
				<div style={ {color : 'white', fontSize : '30px'} }>ModooSyntax : test build</div>
			</div>
			
			<button onClick={ changeTitle }>chagner title</button>

			
			{ list() }

			<div className='modal'>
				<h2>
					ModooSyntax : sytnax for everyone.
				</h2>
				<p>
					2022.01.01
				</p>
				<p>
					010-5506-7921
				</p>
			</div>
	
			<div>
				<form>
					<label>First Name :</label>
					<input type="text" id="fName" />
					<label>Last Name :</label>
					<input type="text" id="lName" />
					<button
						onClick={ ()=> {
							this.callAPI( 
								document.getElementById('fName').value, 
								document.getElementById('lName').value 
							);
						}}
					>
						Call API/ 저장
					</button>
				</form>
			</div>

		</div>
	);
}

export default App;





