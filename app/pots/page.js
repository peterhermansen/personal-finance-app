'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import { useStateContext } from '@/app/stateContext';
import Pot from '@/components/pots/Pot';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';
import Modal from '@/components/modal/Modal';
import Delete from '@/components/modal/Delete';

export default function PotsPage() {
  const { sidebarOpen, pots } = useStateContext();
  const [loading, setLoading] = useState(true);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [buttonSource, setButtonSource] = useState('');
  const [editTarget, setEditTarget] = useState('');
  const [menuOpen, setMenuOpen] = useState('');

  const handleButtonClick = () => {
    setButtonClicked(true);
    setButtonSource('Add Pot');
  };

  const handleExitClick = (e) => {
    if (e.target.alt === menuOpen) setMenuOpen('');
    else setMenuOpen(e.target.alt);
  };

  useEffect(() => {
    if (pots) setLoading(false);
  }, [pots]);

  if (loading) return <Loading />;

  return (
    <div
      className={`container ${sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed'}`}
      onClick={handleExitClick}
    >
      {buttonClicked ? (
        <Modal
          buttonSource={buttonSource}
          setButtonClicked={setButtonClicked}
          editTarget={editTarget}
          setEditTarget={setEditTarget}
        />
      ) : null}

      {deleteClicked ? (
        <Delete
          buttonSource={buttonSource}
          editTarget={editTarget}
          setEditTarget={setEditTarget}
          setDeleteClicked={setDeleteClicked}
        />
      ) : null}
      <div className="content">
        <div className="top">
          <h1 className="title text-1 bold">Pots</h1>
          <button className="btn-add text-4 bold" onClick={handleButtonClick}>
            + Add New Pot
          </button>
        </div>
        <div className="grid grid--2-cols">
          {pots.map((el) => {
            return (
              <Pot
                pot={el}
                key={el.name}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                setButtonClicked={setButtonClicked}
                setButtonSource={setButtonSource}
                setEditTarget={setEditTarget}
                setDeleteClicked={setDeleteClicked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
