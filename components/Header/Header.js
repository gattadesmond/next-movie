import { useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from './Header.module.css';

function Header() {
//   const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times aa`;
  });
  return (
    <div className={styles['rmdb-header']}>
        <div className={styles['rmdb-header-content']}>
            <img className={styles['rmdb-logo']} src="images/reactMovie_logo.png" alt="rmdb-logo" />
            <img className={styles['rmdb-tmdb-logo']} src="images/tmdb_logo.png" alt="tmdb-logo" />
        </div>
    </div>
  );
}

export default Header;