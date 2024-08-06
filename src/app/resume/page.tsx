import { GetServerSideProps } from 'next';
import styles from '../page.module.css';
const resume = () => {
    return (
        <div className={styles.main}>
            <div className={styles.description}>
            <a href='src/app/Project' download> </a>
            </div>
        </div>
    );
}



export default resume