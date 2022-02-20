import React from 'react'
import axios from 'axios';

import './App.css';

function App() {

const [post, setPosts] = React.useState([]);
console.log(post);
const [loading, setLoading] = React.useState(true)

React.useEffect(() => {
  axios.get('https://wizard-world-api.herokuapp.com/Houses')
  .then((response) => {
    setPosts(response.data);
    setLoading(false);
   
  }).catch(() => {
    console.log("deu erro")
  })

}, []);

if(loading === true) return <div class="loadingio-spinner-reload-z7cn6fgrmxt"><div class="ldio-jy95qxl5sx">
<div><div></div><div></div><div></div></div>
</div></div>


	return(
		<div className="app">

			<div className="cards">
        {post.map((post, key) => {
          return (
          <div className="card" key={key} >
					<div className="card-body" >
						<h1>{post.name}</h1>
            <ul>
              <li>Animal da casa: {post.animal}</li>
              <li>Sala comunal: {post.commonRoom}</li>
              <li>Fundador: {post.founder}</li>
            </ul>
						<div className="line"></div>
						</div>
				</div>
        )
        })}
       			
			</div>

		</div>
	)

}

export default App;