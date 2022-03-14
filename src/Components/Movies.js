import React from 'react';
import styles from './Movies.module.css';
import {ReactComponent as ScrollArrow} from '../Assets/scroll-arrow-3.svg';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const Movies = () => {

const moviesList = [
      {id: 1, title: "Harry Potter and the Philosopher's Stone", date:'16 November, 2001', image: 'https://fbwebsitedefaultstorage.blob.core.windows.net/prod-film/4835/uk/harry-potter-and-the-philosophers-stone-special-approval-required-1-poster.jpg', sinopse: "Harry Potter lives with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On Harry's eleventh birthday, a half-giant named Rubeus Hagrid personally delivers an acceptance letter to Hogwarts School of Witchcraft and Wizardry, revealing that Harry's parents, James and Lily Potter, were wizards. When Harry was one year old, an evil and powerful dark wizard, Lord Voldemort, murdered his parents. Harry survived Voldemort's killing curse that rebounded off his forehead and seemingly destroyed the Dark Lord, leaving a lightning bolt-shaped scar on his forehead. Unknown to Harry, he is famous in the wizarding world."},
      {id: 2, title: "Harry Potter and the Chamber of Secrets", date:'15 November, 2002', image: 'https://i.pinimg.com/550x/48/7b/a5/487ba5f1de4236f85b70cb0fa97c0f4d.jpg', sinopse: "Harry Potter lives with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On Harry's eleventh birthday, a half-giant named Rubeus Hagrid personally delivers an acceptance letter to Hogwarts School of Witchcraft and Wizardry, revealing that Harry's parents, James and Lily Potter, were wizards. When Harry was one year old, an evil and powerful dark wizard, Lord Voldemort, murdered his parents. Harry survived Voldemort's killing curse that rebounded off his forehead and seemingly destroyed the Dark Lord, leaving a lightning bolt-shaped scar on his forehead. Unknown to Harry, he is famous in the wizarding world."},
      {id: 3, title: 'item #3', date:'16 November, 2001', image: 'https://fbwebsitedefaultstorage.blob.core.windows.net/prod-film/4835/uk/harry-potter-and-the-philosophers-stone-special-approval-required-1-poster.jpg', sinopse: "Harry Potter lives with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On Harry's eleventh birthday, a half-giant named Rubeus Hagrid personally delivers an acceptance letter to Hogwarts School of Witchcraft and Wizardry, revealing that Harry's parents, James and Lily Potter, were wizards. When Harry was one year old, an evil and powerful dark wizard, Lord Voldemort, murdered his parents. Harry survived Voldemort's killing curse that rebounded off his forehead and seemingly destroyed the Dark Lord, leaving a lightning bolt-shaped scar on his forehead. Unknown to Harry, he is famous in the wizarding world."},
      {id: 4, title: 'item #1', date:'16 November, 2001', image: 'https://fbwebsitedefaultstorage.blob.core.windows.net/prod-film/4835/uk/harry-potter-and-the-philosophers-stone-special-approval-required-1-poster.jpg', sinopse: "Harry Potter lives with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On Harry's eleventh birthday, a half-giant named Rubeus Hagrid personally delivers an acceptance letter to Hogwarts School of Witchcraft and Wizardry, revealing that Harry's parents, James and Lily Potter, were wizards. When Harry was one year old, an evil and powerful dark wizard, Lord Voldemort, murdered his parents. Harry survived Voldemort's killing curse that rebounded off his forehead and seemingly destroyed the Dark Lord, leaving a lightning bolt-shaped scar on his forehead. Unknown to Harry, he is famous in the wizarding world."},
      {id: 5, title: 'item #1', date:'16 November, 2001', image: 'https://fbwebsitedefaultstorage.blob.core.windows.net/prod-film/4835/uk/harry-potter-and-the-philosophers-stone-special-approval-required-1-poster.jpg', sinopse: "Harry Potter lives with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On Harry's eleventh birthday, a half-giant named Rubeus Hagrid personally delivers an acceptance letter to Hogwarts School of Witchcraft and Wizardry, revealing that Harry's parents, James and Lily Potter, were wizards. When Harry was one year old, an evil and powerful dark wizard, Lord Voldemort, murdered his parents. Harry survived Voldemort's killing curse that rebounded off his forehead and seemingly destroyed the Dark Lord, leaving a lightning bolt-shaped scar on his forehead. Unknown to Harry, he is famous in the wizarding world."},
      {id: 6, title: 'item #1', date:'16 November, 2001', image: 'https://fbwebsitedefaultstorage.blob.core.windows.net/prod-film/4835/uk/harry-potter-and-the-philosophers-stone-special-approval-required-1-poster.jpg', sinopse: "Harry Potter lives with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On Harry's eleventh birthday, a half-giant named Rubeus Hagrid personally delivers an acceptance letter to Hogwarts School of Witchcraft and Wizardry, revealing that Harry's parents, James and Lily Potter, were wizards. When Harry was one year old, an evil and powerful dark wizard, Lord Voldemort, murdered his parents. Harry survived Voldemort's killing curse that rebounded off his forehead and seemingly destroyed the Dark Lord, leaving a lightning bolt-shaped scar on his forehead. Unknown to Harry, he is famous in the wizarding world."},
      {id: 7, title: 'item #1', date:'16 November, 2001', image: 'https://fbwebsitedefaultstorage.blob.core.windows.net/prod-film/4835/uk/harry-potter-and-the-philosophers-stone-special-approval-required-1-poster.jpg', sinopse: "Harry Potter lives with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On Harry's eleventh birthday, a half-giant named Rubeus Hagrid personally delivers an acceptance letter to Hogwarts School of Witchcraft and Wizardry, revealing that Harry's parents, James and Lily Potter, were wizards. When Harry was one year old, an evil and powerful dark wizard, Lord Voldemort, murdered his parents. Harry survived Voldemort's killing curse that rebounded off his forehead and seemingly destroyed the Dark Lord, leaving a lightning bolt-shaped scar on his forehead. Unknown to Harry, he is famous in the wizarding world."},
      {id: 8, title: 'item #1', date:'16 November, 2001', image: 'https://fbwebsitedefaultstorage.blob.core.windows.net/prod-film/4835/uk/harry-potter-and-the-philosophers-stone-special-approval-required-1-poster.jpg', sinopse: "Harry Potter lives with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On Harry's eleventh birthday, a half-giant named Rubeus Hagrid personally delivers an acceptance letter to Hogwarts School of Witchcraft and Wizardry, revealing that Harry's parents, James and Lily Potter, were wizards. When Harry was one year old, an evil and powerful dark wizard, Lord Voldemort, murdered his parents. Harry survived Voldemort's killing curse that rebounded off his forehead and seemingly destroyed the Dark Lord, leaving a lightning bolt-shaped scar on his forehead. Unknown to Harry, he is famous in the wizarding world."},
  ]
  const [modailIsOpen, setModailIsOpen] = React.useState(false);
  const [movies, setMovies] = React.useState(moviesList);
  

  const handleSelectedMovie = (id) => {
    setModailIsOpen(movies.find(movie => movie.id === id))
    setModailIsOpen(true);
  }

  function handleCloseModal(){
    setModailIsOpen(false);
  }

  return (
    
    <div className={styles.movies}>
      <ScrollArrow className={styles.scroll}/>
      <h1 className={styles.title}>Movies</h1>
      <div className={styles.carousel}>
           {moviesList.map((post, key) => {
            return (
            <div className={styles.card} onClick={handleSelectedMovie} key={key} 
            style={{backgroundImage: `url('${post.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '180px'}}>
            <div className={styles.cardBody}>
                <h1>{post.title}</h1>
                <h2>{post.date}</h2>
                <p>Sinopsis: {post.sinopse}</p>
            </div>
          </div>
          )
          })}
      </div>
      <div className={styles.container}>
      <Modal
      isOpen={modailIsOpen}
      onRequestClose={handleCloseModal}
      className={styles.modal}>
        {moviesList.filter(function (selecMovie) {
        return selecMovie.id === 1;
    }).map((post, key) => {
          return (
            <div className={styles.content} key={key} onClick={handleCloseModal}>
              <div className={styles.imageModal} style={{backgroundImage: `url('${post.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundSize: 'contain'}}/>
              <h1 className={styles.titleModal}>{post.title}</h1>
              <p className={styles.dateModal}>{post.date}</p>
              <p className={styles.sinopsisModal}>{post.sinopse}</p>
            </div>
          )
        })}
        
      </Modal>
      </div>   
    </div>
      
  )
}

export default Movies