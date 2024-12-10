import Image from 'next/image';

const HeaderOverview = ({ title, btnText }) => {
  return (
    <div className="overview-section-header">
      <h2>{title}</h2>
      <button className="btn--overview">
        <h4>{btnText}</h4>
        <Image
          src="/images/icon-caret-right.svg"
          alt="Right Arrow"
          width="8"
          height="8"
        />
      </button>
    </div>
  );
};

export default HeaderOverview;
