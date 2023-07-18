import React from 'react'
import styles from './Css_Modules/About.module.css'
const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
        <div className={styles.cardInfo}>
        <div className={styles.cardAvatar}></div>
        <div className={styles.cardTitle}>Jose Nicolas Villagra</div>
        <div className={styles.cardSubtitle}>Estudiante &amp; De Henry</div>
        </div>
        <ul className={styles.cardSocial}>
        <li className={styles.cardSocialItem}>Mi nombre es Jose Nicolas Villagra</li>
      <li className={styles.cardSocialItem}>tengo 22 años y estoy dando mis primeros pasos en la industria IT</li>
    <li className={styles.cardSocialItem}>Me estoy especializando en React.js, Node.js,SQL,postegradee</li>
  </ul>
</div>
    </div>
  )
}

export default About