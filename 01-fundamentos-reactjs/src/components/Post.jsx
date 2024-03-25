import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/matiusbv.png" />
          <div className={styles.authorInfo}>
            <strong>Márcio Vasconcelos</strong>
            <span>Web Developer</span>
          </div>  
        </div>
          <time title='25 de Março às 17:53' dateTime="2024-03-25 17:53">Publicado há 1h</time>
     </header>
        <div>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉 <a href=""> jane.design/doctorcare </a></p>
            <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
        </div>
    </article>
    )
}