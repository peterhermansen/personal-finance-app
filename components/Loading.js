import { useStateContext } from '@/app/stateContext';
import styles from '@/styles/components/Loading.module.css';

const Loading = ({ validCookie }) => {
  const { sidebarOpen } = useStateContext();

  return (
    <div
      className={`container ${sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed'} ${styles.loading} ${validCookie ? null : styles.full}`}
    ></div>
  );
};

export default Loading;
