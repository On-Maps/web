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
          <Link href="#">Não tem uma conta? <span className={styles.span}>Cadastre-se</span></Link>
        </form>
      </main>
    </section>
  )
} 