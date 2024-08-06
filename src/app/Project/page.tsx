import styles from '../page.module.css';
import Link from 'next/link';

const Project = () => {
    return (
        
    <div className={styles.main}>
        <div className={styles.description}>
        <Link href="/blogpost"></Link>
        </div>
    </div>
    );
}



export default Project