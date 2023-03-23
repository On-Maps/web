import Image from 'next/image'
import styles from './styles/register.module.css'

export default function Register() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.cardContainer}>
        <Image src="" alt="imagem register" width={100} height={100} />
        <form className={styles.formContainer}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  )
}