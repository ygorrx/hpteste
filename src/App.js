import React from 'react'
import axios from 'axios';
import Image from './Image'


import './App.css';
import PaginationComponents from './Components/PaginationComponents';

function App() {

const [post, setPosts] = React.useState([]);
const [itensPerPage, setItensPerPage] = React.useState(10);
const [currentPage, setCurrentPage] = React.useState(0);
const [loading, setLoading] = React.useState(true);

const pages = Math.ceil(post.length / itensPerPage);
const startIndex = currentPage*itensPerPage;
const endIndex = startIndex + itensPerPage;
const currentPosts = post.slice(startIndex, endIndex);

React.useEffect(() => {
  axios.get('https://hp-api-changes.herokuapp.com/api/characters')
  .then((response) => {
    // console.log(response);
    
    setPosts(response.data);
    setLoading(false);
   
  }).catch(() => {
    console.log("deu erro")
  })

}, []);

if(loading === true) return <div class="loadingio-spinner-reload-z7cn6fgrmxt"><div class="ldio-jy95qxl5sx">
<div><div></div><div></div><div></div></div>
</div></div>


	return (
    <>
    <PaginationComponents pages={pages} setCurrentPage={setCurrentPage}/>
		<div className="app">
    		<div className="cards">
        {currentPosts.map((post, key) => {
          return (
          <div className="card" key={key} >
					<div className="card-body" >
            <Image className="image" src={post.image}/>
						<h1>{post.name}</h1>
            <h2>{post.house}</h2>
          	<div className="line"></div>
						</div>
				</div>
        )
        })}
       			
			</div>

		 </div>
     </>
)
}

export default App;