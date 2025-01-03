'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import { useStateContext } from '@/app/stateContext';
import Pot from '@/components/pots/Pot';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

export default function PotsPage() {
  const { sidebarOpen, pots } = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pots) setLoading(false);
  }, [pots]);

  if (loading) return <Loading />;

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
          {pots.map((el) => {
            return <Pot pot={el} key={el.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
