import React from 'react'
import styles from './PaginationComponents.module.css'

const PaginationComponents = ({pages, setCurrentPage}) => {
  return (
    <div className={styles.bg}>{Array.from(Array(pages), (item, index) =>{
        return <button className={styles.button} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
      })}</div>
  )
}

export default PaginationComponents