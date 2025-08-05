// app/(landing)/page.js
import styles from './page.module.css';

export const metadata = {
  title: 'Главная — SSR',
  description: 'Главная страница, отрисованная на сервере'
};

export default function LandingPage() {
  return (
    <div className={styles.wrapper}>
      <h1>это первая страница отрисованная SSR</h1>
    </div>
  );
}
