import React from 'react'
import axios from 'axios';
import PaginationComponents from './PaginationComponents';
import styles from './Cards.module.css';

const Cards = () => {
  const [post, setPosts] = React.useState([]);
  const [itensPerPage, setItensPerPage] = React.useState(20);
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
      <div className={styles.app}>
          <div className={styles.cards}>
          {currentPosts.map((post, key) => {
            return (
            <div className={styles.card} key={key} 
            style={{backgroundImage: `url('${post.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '230px'}}>
            <div className={styles.border}>
              <div className={styles.cardBody}>
               <h1>{post.name}</h1>
              <h2>House: {post.house}</h2>
              <h2>Species: {post.species}</h2>
              <h2>Played by: {post.actor}</h2>
              </div>
              </div>
          </div>
          )
          })}
               
        </div>
  
       </div>
       </>
  )
}

export default Cards