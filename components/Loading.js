import { useStateContext } from '@/app/stateContext';
import styles from '@/styles/components/Loading.module.css';

const Loading = () => {
  const { sidebarOpen } = useStateContext();

  return (
    <div
      className={`container ${sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed'} ${styles.loading}`}
    ></div>
  );
};

export default Loading;
