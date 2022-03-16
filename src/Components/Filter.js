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
    console.log(filtered);
    }, [activeHouse]); 

  return (
    <div className={styles.filterContainer}>
        <button onClick={()=> setActiveHouse(currentAll)}>All</button>
        <button onClick={()=> setActiveHouse('Gryffindor')}>Gryffindor</button>
        <button onClick={()=> setActiveHouse('Hufflepuff')}>Hufflepuff</button>
        <button onClick={()=> setActiveHouse('Ravenclaw')}>Ravenclaw</button>
        <button onClick={()=> setActiveHouse('Slytherin')}>Slytherin</button>
    </div>
  )
}

export default Filter