import ReactModal from 'react-modal';
import { useState } from 'react';

interface TCModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
}

const TCModal: React.FC<TCModalProps> = ({ isOpen, onRequestClose, title }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={title}
            ariaHideApp={false}
            className="modal-content mt-8"
            overlayClassName="modal-overlay"
        >
            <div className="w-full h-1/2 bg-white rounded-lg shadow-lg p-4 m-auto flex flex-col justify-center items-center overflow-y-auto">
                <h2>{title}</h2>
                <div className="mb-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                    <p className="text-gray-700">
                        Welcome to [Your Project Name]! This Terms and Conditions document describes the terms and conditions applicable to your use of [Your Website/Service/App Name] (the &quot;Site&quot;).
                    </p>
                </div>

                <div className="mb-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">Your Agreement</h3>
                    <p className="text-gray-700">
                        By accessing and using the Site, you agree to comply with and be bound by these terms and conditions.
                    </p>
                </div>


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

export default TCModal;
