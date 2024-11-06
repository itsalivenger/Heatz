import { useState } from 'react';
import styles from './Navbar.module.css';
import SearchBar from './searchBar';

function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [menuIsToggled, setMenuIsToggled] = useState(false);
  const handleSubmit = (val) => {
    // to submit value
    console.log(val);
  }
  const toggleSearchInput = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <>
      <nav className={`${styles.navbar}`}>
        <a href='./' className={styles["navbar-logo"]}>
          <img src={"./images/logos/logo.png"} alt='this is the company logo' />
        </a>

        <div className={`${styles["linksContainer"]} toggledMenu ${menuIsToggled ? styles.toggledMenu : ''}`}>
          <div className={`${styles["navbar-links"]} ${isSearchActive ? styles['inactive'] : ''}`}>
            <a href="./">Mobile Accs</a>
            <a href="./">Computer Accs</a>
            <a href="./">Multimedia</a>
            <a href="./">Support</a>
          </div>

          <div className={`${styles["navbar-icons"]} ${isSearchActive ? styles['inactive'] : ''}`}>
            <a href="./"><i className={`material-symbols-outlined`}>
              shopping_bag
            </i></a>
            <a href="./"><i className={`material-symbols-outlined`}>
              favorite
            </i></a>
            <a href="./"><i className={`material-symbols-outlined`}>
              person
            </i></a>
            <div onClick={toggleSearchInput} href="./"><i className={`material-symbols-outlined`}>
              search
            </i>
            </div>
          </div>
          <div className={`${styles["closeIcon"]} ${styles.closeBtnContainer}`}>
            <i onClick={() => setMenuIsToggled(!menuIsToggled)} className={`material-symbols-outlined`}>
              close
            </i>
          </div>
        </div>
        <SearchBar handleSubmit={handleSubmit} toggleSearchInput={toggleSearchInput} isActive={isSearchActive} />
        <div onClick={() => setMenuIsToggled(!menuIsToggled)} className={`${styles.hamburger}`}>
          <i className={`material-symbols-outlined`}>menu</i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;