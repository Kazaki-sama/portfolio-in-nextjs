import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    
    <main className={styles.main}>
   
      <div className={styles.description}>
       
        <div>
          <Image
            src=""
            alt="subham"
          >

          </Image>
        </div>

        <div className="about">
        <p>I am Subham Maharjan. I am 19.I love coding, designing and game dev. I love cats but cat doesn't like me 
          sadly.
        </p>

        language I know.<br/>
        <ul><li>lua</li></ul>
        
        </div>
      
      </div>
    </main>
  );
}


