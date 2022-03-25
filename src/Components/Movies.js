import React from 'react';
import styles from './Movies.module.css';
import arrow3 from '../Assets/scroll-arrow-3.svg'
import Modal from 'react-modal';
import Trailer from '../Assets/trailer.svg'
import Itunes from '../Assets/itunes.svg'
import Hbo from '../Assets/hbo.svg'

Modal.setAppElement('#root')

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.8)';

const Movies = () => {



const moviesList = [
      {id: 1, title: "Harry Potter and the Philosopher's Stone", date:'16 November, 2001', image: 'https://fbwebsitedefaultstorage.blob.core.windows.net/prod-film/4835/uk/harry-potter-and-the-philosophers-stone-special-approval-required-1-poster.jpg', sinopse: "Harry Potter lives with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On Harry's eleventh birthday, a half-giant named Rubeus Hagrid personally delivers an acceptance letter to Hogwarts School of Witchcraft and Wizardry, revealing that Harry's parents, James and Lily Potter, were wizards. When Harry was one year old, an evil and powerful dark wizard, Lord Voldemort, murdered his parents. Harry survived Voldemort's killing curse that rebounded off his forehead and seemingly destroyed the Dark Lord, leaving a lightning bolt-shaped scar on his forehead. Unknown to Harry, he is famous in the wizarding world."},
      {id: 2, title: "Harry Potter and the Chamber of Secrets", date:'15 November, 2002', image: 'https://i.pinimg.com/550x/48/7b/a5/487ba5f1de4236f85b70cb0fa97c0f4d.jpg', sinopse: "Spending the summer with the Dursleys, Harry Potter meets Dobby, a house-elf who warns him that it is too dangerous to return to Hogwarts. Dobby sabotages an important dinner for the Dursleys, who lock up Harry to prevent his return to Hogwarts. Harry's friend Ron Weasley and his brothers Fred and George rescue him in their father's flying Ford Anglia.Harry and the Weasley family are joined by Hermione Granger at a book-signing by Gilderoy Lockhart, Hogwarts' new Defence Against the Dark Arts teacher. Confronted by Draco Malfoy, Harry notices Malfoy's father, Lucius, slip a book into Ginny Weasley's cauldron."},
      {id: 3, title: 'Harry Potter and the Prisoner of Azkaban', date:'4 June, 2004', image: 'https://images.moviefit.me/t/o/76-harry-potter-and-the-prisoner-of-azkaban.jpg', sinopse: "During a summer with the Dursleys, Harry Potter loses his temper and accidentally causes Aunt Marge to inflate like a balloon and float away after she insults his dead parents. Fed up, Harry flees the Dursleys with his belongings. The Knight Bus arrives and takes Harry to the Leaky Cauldron, where he is pardoned by Minister for Magic Cornelius Fudge for using magic outside of Hogwarts. After reuniting with his best friends Ron Weasley and Hermione Granger, Harry learns that Sirius Black, a convicted supporter of the dark wizard Lord Voldemort, has escaped Azkaban prison and intends to kill him."},
      {id: 4, title: 'Harry Potter and the Goblet of Fire', date:'18 November, 2005', image: 'http://image.tmdb.org/t/p/original/6sASqcdrEHXxUhA3nFpjrRecPD2.jpg', sinopse: "Harry Potter has a nightmare in which a Muggle caretaker is murdered after overhearing a plot by Lord Voldemort, Peter Pettigrew and another man whom Harry does not recognise. Harry, along with the Weasleys, Hermione, and Cedric and Amos Diggory attend the Quidditch World Cup. After the match, Death Eaters attack the tournament and the man from Harry's nightmare casts the Dark Mark. At Hogwarts, Professor Dumbledore announces that the school will host the Triwizard Tournament along with the Durmstrang Institute from Bulgaria and the Beauxbatons Academy from France."},
      {id: 5, title: 'Harry Potter and the Order of the Phoenix', date:'11 July, 2007', image: 'https://picfiles.alphacoders.com/423/423539.jpg', sinopse: "While staying at the Dursleys, Harry Potter and Dudley are attacked by Dementors. Harry repels them using a Patronus spell. The Ministry of Magic detects the underaged Harry using magic and expel him from Hogwarts, though he is later exonerated. The Order of the Phoenix, a secret organization founded by Albus Dumbledore, informs Harry that the Ministry of Magic is oblivious to Lord Voldemort's return. At the Order's headquarters, Harry's godfather, Sirius Black, mentions that Voldemort seeks an object he previously lacked; Harry believes it to be a weapon.Minister for Magic Cornelius Fudge has appointed Dolores Umbridge as Hogwarts new Defence Against the Dark Arts professor."},
      {id: 6, title: 'Harry Potter and the Half-Blood Prince', date:'15 July, 2009', image: 'https://miro.medium.com/max/800/1*cKW8_cst27mBFnoWkzQhdg.jpeg', sinopse: "Lord Voldemort tightens his grip on the wizarding and Muggle worlds: his Death Eaters kidnap Mr Ollivander, and destroy London's Millennium Bridge. With Lucius Malfoy incarcerated in Azkaban, Voldemort chooses Draco to carry out a secret mission at Hogwarts. Draco's mother Narcissa and aunt Bellatrix Lestrange seek out Severus Snape, who allays their suspicions by claiming he is a mole within the Order of the Phoenix. Snape makes an Unbreakable Vow with Narcissa to protect Draco and fulfil his task should he fail. Harry Potter accompanies Albus Dumbledore to persuade former Potions professor Horace Slughorn to return to Hogwarts."},
      {id: 7, title: 'Harry Potter and the Deathly Hallows – Part 1', date:'19 November, 2010', image: 'https://picfiles.alphacoders.com/420/420812.jpg', sinopse: "At Malfoy Manor, Severus Snape meets with Lord Voldemort and Death Eaters. He reports that the Order of the Phoenix will move Harry Potter, no longer under his mother's protective spell, to a safe location. Voldemort confiscates Lucius Malfoy's wand; his own is powerless against Harry because it and Harry's wand are 'brothers' by sharing the same phoenix feather core. During the move, Harry survives Voldemort's attack but Mad-Eye Moody and Hedwig are killed. During preparations for Bill Weasley and Fleur Delacour's wedding, the new Minister for Magic arrives."},
      {id: 8, title: 'Harry Potter and the Deathly Hallows – Part 2', date:'15 July, 2011', image: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg', sinopse: "After burying Dobby, Harry Potter asks the goblin Griphook to help him, along with Ron Weasley and Hermione Granger, break into Bellatrix Lestrange's vault at Gringotts bank, suspecting a Horcrux is there. Griphook agrees, in exchange for the Sword of Gryffindor. Wandmaker Ollivander tells Harry that two wands taken from Malfoy Manor belonged to Bellatrix and Draco Malfoy; he senses Draco's wand has changed its allegiance to Harry, who captured it from Draco. A horcrux, Helga Hufflepuff's cup, is found in Bellatrix's vault, but Griphook snatches the sword and abandons them."},
  ]
  const initialState = moviesList[0]; 

  const [modailIsOpen, setModailIsOpen] = React.useState(false);
  const [selectMovie, setSelectedMovie] = React.useState(initialState);
  

  const handleSelectedMovie = (post) => {
    setSelectedMovie(post);
    setModailIsOpen(true);
  }

  function handleCloseModal(){
    setModailIsOpen(false);
  }

  return (
    
    <div className={`${styles.movies} animeLeft`}>
      <img className={styles.scroll} src={arrow3} />
      <h1 className={styles.title}>Movies</h1>
      <div className={styles.carousel}>
           {moviesList.map((post, key) => {
            return (
            <div className={styles.card} onClick={() => handleSelectedMovie(post)} key={key} 
            style={{backgroundImage: `url('${post.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'}}>
            <div className={styles.cardBody}>
               <h1>Click for more information!</h1>
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
         <div className={styles.content} onClick={handleCloseModal}>
              <div className={styles.imageModal} style={{backgroundImage: `url('${selectMovie.image}')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
              backgroundSize: 'contain'}}/>
              <h1 className={styles.titleModal}>{selectMovie.title}</h1>
              <p className={styles.dateModal}>{selectMovie.date}</p>
              <p className={styles.sinopsisModal}>{selectMovie.sinopse}</p>
              <ul className={styles.lista}>
                <a href='www.google.com.br' target="_blank" rel="noopener noreferrer" ><img img className={styles.trailerImage} src={Trailer} alt='trailer'/>
                <h3>Watch Trailer</h3></a>
                <a href='www.google.com.br' target="_blank" rel="noopener noreferrer" ><img className={styles.itunesImage} src={Itunes}  alt='itunes'/></a>
                <a href='www.google.com.br' target="_blank" rel="noopener noreferrer" ><img img className={styles.hboImage} src={Hbo}  alt='hbo'/></a>
              </ul>
            </div>
        
        
      </Modal>
      </div>   
    </div>
      
  )
}

export default Movies