import { useStateContext } from '@/app/stateContext';

const Loading = () => {
  const { sidebarOpen } = useStateContext();

  return (
    <div
      className={`container ${sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed'}`}
    ></div>
  );
};

export default Loading;
