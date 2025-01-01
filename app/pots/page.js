'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import data from '@/data.json';
import { useStateContext } from '@/app/stateContext';
import Pot from '@/components/pots/Pot';

export default function PotsPage() {
  const { sidebarOpen } = useStateContext();

  return (
    <div
      className={`container ${sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed'}`}
    >
      <div className="content">
        <div className="top">
          <h1 className="title text-1 bold">Pots</h1>
          <button className="btn-add text-4 bold">+ Add New Pot</button>
        </div>
        <div className="grid grid--2-cols">
          {data.pots.map((el) => {
            return <Pot pot={el} key={el.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
