import React, { useEffect } from 'react';
import closeIcon from '../../assets/icons/close-icon.svg';

const Modal: React.FC<{
  openModal: boolean;
  children: React.ReactNode;
  handleClose: () => void;
}> = ({ openModal, children, handleClose }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openModal]);

  if (!openModal) return null;

  return (
    <div
      className='fixed inset-0 flex justify-center items-center z-10 px-4 py-8 md:p-8 bg-black bg-opacity-50'
      onClick={handleClose}
    >
      <div
        className='bg-white w-full md:w-3/5 lg:w-1/3 mx-auto rounded px-4 py-7 md:p-7'
        onClick={(e) => e.stopPropagation()}
      >
        <button className='w-fit flex ml-auto' onClick={handleClose}>
          <img src={closeIcon} alt='close' className='w-6 h-6' />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
