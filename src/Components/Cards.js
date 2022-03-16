import React from 'react'
import axios from 'axios';
import PaginationComponents from './PaginationComponents';
import styles from './Cards.module.css';
import {ReactComponent as ScrollArrow} from '../Assets/scroll-arrow-2.svg';
import Filter from './Filter';

const Cards = () => {
  const [post, setPosts] = React.useState([]);
  const [itensPerPage, setItensPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [filtered, setFiltered] = React.useState([]);
  const [activeHouse, setActiveHouse] = React.useState('');
  console.log(activeHouse);
  
  
  const pages = Math.ceil(post.length / itensPerPage);
  const startIndex = currentPage*itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentPosts = filtered.slice(startIndex, endIndex);
  const currentAll = post.slice(startIndex, endIndex);
  
  
  React.useEffect(() => {
    axios.get('https://hp-api-changes.herokuapp.com/api/characters')
    .then((response) => {
      // console.log(response);
      
      setPosts(response.data);
      setFiltered(response.data);
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
      <div className={styles.app}>
         <ScrollArrow className={styles.scroll}/>
         <h1 className={styles.title}>Characters</h1>
         <div className={styles.filterPosition}>
         <Filter
         post={post}
         setFiltered={setFiltered}
         activeHouse={activeHouse}
         setActiveHouse={setActiveHouse}
         currentPost={currentAll}
         />
         </div>:
         <div className={styles.cards}>
            {(currentAll,currentPosts).map((post, key) => {
            return (
            <div className={styles.card} key={key} 
            style={{backgroundImage: `url('${post.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '180px'}}>
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
       <PaginationComponents pages={pages} setCurrentPage={setCurrentPage}/>
       </>
  )
}

export default Cards