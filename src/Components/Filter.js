import React from 'react'
import styles from './Filter.module.css'

const Filter = ({setActiveHouse, post, activeHouse, setFiltered,currentAll}) => {

 React.useEffect(()=>{
  
  if(activeHouse === currentAll){
        setFiltered(post);
        return
    }
    const filtered = post.filter((card) => card.house === activeHouse);
    setFiltered(filtered);
    
    }, [activeHouse]); 

    React.useEffect(()=>{
      setActiveHouse(currentAll);
    }, []);
   
    
  return (
    <div className={styles.filterContainer}>
        <button className={styles.btn} onClick={()=> setActiveHouse(currentAll)}><span>All</span></button>
        <button className={styles.btn} onClick={()=> setActiveHouse('Gryffindor')}><span>Gryffindor</span></button>
        <button className={styles.btn} onClick={()=> setActiveHouse('Hufflepuff')}><span>Hufflepuff</span></button>
        <button className={styles.btn} onClick={()=> setActiveHouse('Ravenclaw')}><span>Ravenclaw</span></button>
        <button className={styles.btn} onClick={()=> setActiveHouse('Slytherin')}><span>Slytherin</span></button>
        <button className={styles.btn} onClick={()=> setActiveHouse('Unknown')}><span>No House</span></button>
    </div>
  )
}

export default Filter