import Image from 'next/image'
import styles from './styles/register.module.css'

export default function Register() {
  return (
    <section className={styles.sectionContainer}>
      <Image src="/register.svg" alt="imagem register" width={500} height={500} />
      <div className={styles.cardContainer}>
        <div>
          <form className={styles.formContainer}>
            <h1>Bem-vindo ao cadastro👋</h1>
            <div className={styles.line}></div>
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirme a senha</label>
              <input type="password" name="confirmPassword" id="confirmPassword" />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </section>
  )
}