import { useEffect, useRef } from 'react';
import _ from 'lodash';
import styles from './App.module.css';

function App() {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const ulRef = useRef(null);
  const callback = (entries) =>
    _.forEach(entries, (entry) => {
      if (entry.isIntersecting) {
        entry.target.className = `${styles.liItem} ${styles.show}`;
        observer.unobserve(entry.target);
      } else {
        entry.target.className = styles.liItem;
      }
    });
  const observer = new IntersectionObserver(callback, { threshold: 0 });
  useEffect(() => {
    const listOfLIElement = ulRef.current.children;
    _.forEach(listOfLIElement, (li) => observer.observe(li));
  }, []);
  return (
    <ul
      ref={ulRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        listStyle: 'none',
        padding: 15,
        margin: 0,
      }}
    >
      {arr.map((item) => (
        <li key={item} className={styles.liItem}>
          card
        </li>
      ))}
    </ul>
  );
}

export default App;
