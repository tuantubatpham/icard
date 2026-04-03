
import styles from "./JasmineStyleHero.module.css";

export default function JasmineStyleHero() {
     
  return (
    <main className={styles.page}>
      
      <h1 className={styles.name}>DOAN QUOC VINH</h1>

      <section className={styles.bottomRow}>
        <p className={styles.sideWord}>A JUNIOR</p>

        <div className={styles.cardWrap}>
          <div className={styles.cardMeta}>
            <span>ECOMMERCE</span>
            <span>2026</span>
          </div>

          <article className={styles.card}>
            
          </article>
        </div>

      
      </section>


    </main>
  );
}