import styles from '@/styles/components/modal/Logout.module.css';
import fetchReq from '@/utils/fetchReq';
import { useRouter } from 'next/navigation';

const Logout = ({ setLogoutClicked }) => {
  const handleExitClick = () => setLogoutClicked(false);
  const router = useRouter();

  const handleLogoutClick = () => {
    fetchReq('POST', '/logout');
    setTimeout(() => {
      router.push('/login');
    }, 10);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="text-2 bold">Are you sure you want to log out?</span>
          <button className={styles.exit} onClick={handleExitClick}>
            <img src="images/icon-close-modal.svg" alt="Exit Button" />
          </button>
        </div>
        <button
          className={`${styles.delete} text-4 bold white`}
          onClick={handleLogoutClick}
        >
          Log Out
        </button>
        <button
          className={`${styles.back} text-4 gray`}
          onClick={handleExitClick}
        >
          No, Go Back
        </button>
      </div>

      <div className={styles.background} onClick={handleExitClick}></div>
    </>
  );
};

export default Logout;
