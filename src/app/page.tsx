import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Subham Maharjan.
        </p>
        <hr/>
        <div>
        <b>SKILLS </b>
        <hr/>
          <ul>
            <li>Database-management: Capable uf using Excel and Sql </li>
            <li> Programming: making game in lua and know other language like C, python,javascript and reactjs as a framework  </li>
            <li>Problem-Solving: Think and look at the problem in a bigger picture</li>
            <li>Designing: photoshop, figma and lightroom are key component to desgin</li>
            </ul>  
        </div>
        <div>
          <b>EXPERIENCE </b>
          <hr/>
            Seson, Basundhara 
              <ul>
                <li>Social media coordinator </li>
                <li>Social media post designer</li>
              </ul>
        </div>
        <div>
            <b>PROJECTS</b>
            
        </div>
      </div>
    </main>
  );
}
