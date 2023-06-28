import styles from '../styles/Home.module.sass'
import Image from "next/image";

export default function Home() {
  let summary: string[] = [
    `Hello! My name is Logan Cederlof (Dragon of Shuu); a talented, and 
    hardworking developer! `, `I love to spend my free
    time programming new projects, and learning new 
    frameworks! I mainly prefer to program in Python,
    however my abilities extend farther than that; I
    also enjoy C#, Java, and Javascript.`, `I have 
    two years of work experience working on using
    the Elastic Stack framework as a solution to 
    storing 4G/5G cellular router metric data.`,
    `On top of this, I have a vast array of personal
    projects that I have worked on in my free time!`
  ]

  return (
    <div className={styles.container}>
      <main className="main">
        <h1 className="title">
          Welcome to my <span>WEBSITE!</span>
        </h1>
        
        <hr className={styles.hr} />

        <div className={styles.photo_text_display}>
          <div className={styles.section_center}>
            <div className={styles.picture_container}>
              <Image src="/about-me/LoganC.png" 
                    width={9*20} 
                    height={16*20} 
                    alt="Logan C's Portrait"
                    className={styles.picture}/>
            </div>
          </div>
          <div className={styles.section_center}>
            <div className={styles.vertical}></div>
          </div>
          <div className={styles.text_block}>
              {
                summary.map((e, index) => {
                  return <p key={index}>{e}</p>;
                })
              }
          </div>
        </div>
      </main>
    </div>
  )
}