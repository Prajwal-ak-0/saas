import ReactModal from 'react-modal';
import { useState } from 'react';

interface PPModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  content?: string;
}

const PPModal: React.FC<PPModalProps> = ({ isOpen, onRequestClose, title, content }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      ariaHideApp={false}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="w-full h-1/2 bg-white rounded-lg shadow-lg p-4 m-auto flex flex-col justify-center items-center">
        <h2>{title}</h2>
        <p>{content}</p>
        <button
          onClick={onRequestClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default PPModal;
