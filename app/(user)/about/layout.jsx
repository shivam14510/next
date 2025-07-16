import styles from "../style.module.css";

export default function AboutLayout({ children }) {
  return (
    
      <body >
        <div className={styles.bgColors}>
        <h1>Hello About Layout</h1>
        {children}
        </div>
      </body>
     );
}
