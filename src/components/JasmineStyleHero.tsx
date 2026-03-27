import styles from "./JasmineStyleHero.module.css";

export default function JasmineStyleHero() {
  return (
    <main className={styles.page}>
      <header className={styles.topRow}>
        <div className={styles.meta}>
          <span>* NEW YORK, US</span>
          <span>3:03 PM GMT-4</span>
          <span>36.7783 N, 119.4179 W</span>
        </div>
        <nav className={styles.nav}>
          <a href="#">HOME</a>
          <a href="#">WORKS</a>
          <a href="#">BREAK</a>
          <a href="#">ABOUT</a>
        </nav>
      </header>

      <h1 className={styles.name}>DOAN QUOC VINH</h1>

      <section className={styles.bottomRow}>
        <p className={styles.sideWord}>A JUNIOR</p>

        <div className={styles.cardWrap}>
          <div className={styles.cardMeta}>
            <span>ECOMMERCE</span>
            <span>2026</span>
          </div>

          <article className={styles.card}>
            <div className={styles.cardHead}>
              packs full of snacks not the card itself. massive foodie, motion designer,
              photographer, travel everywhere.
            </div>

            <div className={styles.cardMain}>
              <div className={styles.title}>
                jas
                <br />
                gunarto
              </div>
              <div className={styles.accent} />
            </div>

            <div className={styles.cardFoot}>
              <div className={styles.contact}>
                <span>jasminegunarto.com</span>
                <span>jasminegunarto1@gmail.com</span>
              </div>
              <div className={styles.tags}>
                <div>editor</div>
                <div>creative</div>
                <div>national ad council</div>
                <div>the taste gap</div>
              </div>
            </div>
          </article>
        </div>

        <p className={styles.sideWord}>ECOMMERCE</p>
      </section>

      <p className={styles.scroll}>SCROLL DOWN</p>
    </main>
  );
}