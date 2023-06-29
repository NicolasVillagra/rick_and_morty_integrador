import styles from './Css_Modules/SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  
      const [id, setId] = useState('');
    
      const handleChange = (event) => {
        setId(event.target.value);
      };
    
      const handleSearch = () => {
        onSearch(id);
      }


   return (
      <div className={styles.inputGroup}>
         <input  value={id}  onChange={handleChange}required="" type="search" name="text" autocomplete="off" className={styles.input} />
         <button onClick={handleSearch}>
            <span className={styles.transition}></span>
            <span className={styles.gradient}></span>
            <span className={styles.label}>Agregar</span>
         </button>
      </div>
   );
}