import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';

function App() {

	let [title, titleChanger] = useState(['힙합', '발라드', 'UK팝', '펑크락']);

	let [like, likeChanger] = useState([0, 0, 0, 0]);
		
	function increaseLike1(){
		let newlike = [...like];
		newlike[0] = newlike[0]+1
		likeChanger( 
			newlike
		);

		console.log(`like1 :` +newlike);
	}

	function increaseLike2(){
		let newlike = [...like];
		newlike[1] = newlike[1]+1
		likeChanger( 
			newlike
		);

		console.log(`like1 :` +newlike);
	}

	function increaseLike3(){
		let newlike = [...like];
		newlike[2] = newlike[2]+1
		likeChanger( 
			newlike
		);

		console.log(`like1 :` +newlike);
	}

	function increaseLike4(){
		let newlike = [...like];
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
						<span onClick={ 
							likeIncreaser[i]
						 }>
							like
						</span> {like[i]};
					</h2>
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
	
	return (
		<div className="App">
			<div className="black-nav">
				<div style={ {color : 'blue', fontSize : '30px'} }>개발 BLog</div>
			</div>
			
			<button onClick={ changeTitle }>chagner title</button>

			
			{ list() }

			<div className='modal'>
				<h2>
					title
				</h2>
				<p>
					date
				</p>
				<p>
					content
				</p>
			</div>
		</div>
	);
}

export default App;
