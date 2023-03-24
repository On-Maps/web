import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.Clouds}>
        <div className={`${styles.containerButtons}`}>
          <section>
            <Image
              src="/UenpLogo.png"
              alt="banner"
              className={styles.bannerImage}
              width={400}
              height={100}
            />
          </section>
          <Link href="#" className={styles.buttonCampus}>
            <h4 className={styles.TextButton}>Bandeirantes</h4>
          </Link>
          <Link href="#" className={styles.buttonCampus}>
            <h4 className={styles.TextButton}>Cornélio Procópio</h4>
          </Link>
          <Link href="#" className={styles.buttonCampus}>
            <h4 className={styles.TextButton}>Jacarezinho</h4>
          </Link>
          <Link href="#" className={styles.buttonCampusAlternative}>
            <h4 className={styles.TextButton}>Procurar uma Sala</h4>
          </Link>
          <Link href="/login" className={styles.buttonLogin}>
            <h4 className={styles.TextButton}>Entrar como Administrador</h4>
          </Link>
        </div>

        <div className={`${styles.Cloud} ${styles.Foreground}`}></div>
        <div className={`${styles.Cloud} ${styles.Background}`}></div>
        <div className={`${styles.Cloud} ${styles.Foreground}`}></div>
        <div className={`${styles.Cloud} ${styles.Background}`}></div>
        <div className={`${styles.Cloud} ${styles.Background}`}></div>
        <div className={`${styles.Cloud} ${styles.Foreground}`}></div>
        <div className={`${styles.Cloud} ${styles.Background}`}></div>
        <div className={`${styles.Cloud} ${styles.Foreground}`}></div>
        <div className={`${styles.Cloud} ${styles.Background}`}></div>
        <div className={`${styles.Cloud} ${styles.Background}`}></div>
        <div className={`${styles.Cloud} ${styles.Background}`}></div>
        <div className={`${styles.Cloud} ${styles.Foreground}`}></div>
      </div>
    </div>
  )
}
