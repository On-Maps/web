import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '../login/styles/login.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function Login() {
  return (
    <section className={styles.sectionContainer}>
      <main className={styles.mainContainer}>
        <Image
          className={styles.imageContainer}
          src="login.svg"
          alt="Login"
          width={600}
          height={440}
        />
        <div className={styles.cardContainer}>
          <form className={styles.formContainer}>
            <h1>Bem-vindo ao Login 🙌</h1>
            <div className={styles.line} />
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <div className={styles.rememberMeContainer}>
              <div>
                <input type="checkbox" />
                <label>Lembrar-me</label>
              </div>
              <Link href="#">Esqueceu a senha?</Link>
            </div>
            <button type="submit">Entrar</button>
            <div className={styles.createAccount}>
              <p>Não tem uma conta?</p>
              <Link href="#" className={styles.span}>Cadastre-se</Link>
            </div>
          </form>
        </div>
      </main>
    </section>
  )
} 