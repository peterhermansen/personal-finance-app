import styles from '@/styles/components/transactions/Pagination.module.css';
import { useStateContext } from '@/app/stateContext';

const PageNav = ({ filteredData, page, setPage }) => {
  const { windowSize } = useStateContext();
  const numPages = Math.ceil(filteredData.length / 10);

  const handlePrevClick = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNextClick = () => {
    if (page < numPages - 1) setPage(page + 1);
  };

  const handlePageClick = (num) => {
    if (num !== page) setPage(num);
  };

  return (
    <div className={styles['pages-div']}>
      <button className={styles['side-btn']} onClick={handlePrevClick}>
        <svg
          height="11"
          viewBox="0 0 6 11"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m5.14656 10.8535-5.000005-4.99997c-.046488-.04643-.0833676-.10158-.1085298-.16228-.0251623-.06069-.03811269-.12576-.0381127-.19147 0-.0657.0129504-.13077.0381126-.19147.0251623-.06069.0620419-.11584.1085299-.16228l4.999995-4.999997c.06993-.0700052.15906-.117689.2561-.13701419.09704-.01932521.19764-.0094229.28905.02845329.09141.0378763.16953.1020229.22447.1843199.05493.082297.08421.179044.08414.277991v10.000017c.00007.0989-.02921.1957-.08414.278-.05494.0823-.13306.1464-.22447.1843s-.19201.0478-.28905.0284c-.09704-.0193-.18617-.067-.25609-.137z" />
        </svg>
        {windowSize.width > 593 ? <span>Prev</span> : null}
      </button>

      <div className={styles.pages}>
        {/* Create array with length = numPages and iterate through it to generate buttons */}
        {Array.from({ length: numPages }, (_, i) => (
          <button
            className={`${styles.page} ${i === page ? styles['page--active'] : null}`}
            key={i}
            onClick={() => handlePageClick(i)}
          >
            <span className={styles.number}>{i + 1}</span>
          </button>
        ))}
      </div>

      <button className={styles['side-btn']} onClick={handleNextClick}>
        {windowSize.width > 593 ? <span>Next</span> : null}
        <svg
          height="11"
          viewBox="0 0 6 11"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m.853506.146465 5.000004 5.000005c.04648.04643.08336.10158.10853.16228.02516.06069.03811.12576.03811.19147 0 .0657-.01295.13077-.03811.19147-.02517.06069-.06205.11584-.10853.16228l-5.000004 5.00003c-.069927.07-.159054.1177-.256097.137-.097042.0193-.197637.0094-.289048-.0285-.091412-.0378-.16953-.102-.2244652-.1843-.0549354-.0823-.08421767-.179-.08413981-.278l-.00000043-9.999984c-.00007788-.098949.02920444-.195695.08413984-.277992.0549356-.082297.1330536-.1464431.2244646-.1843193.091412-.03787611.192007-.04777907.289049-.02845381.097042.01932521.186169.06700801.256097.13701411z" />
        </svg>
      </button>
    </div>
  );
};

export default PageNav;
