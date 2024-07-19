import { useEffect, useState } from 'react';

const Modal = (props) => {
  const [showModal, setShowModal] = useState(props.show);
  useEffect(()=>{
    setShowModal(props.show)
  }, [props.show])
  const handleClose = () => {
    setShowModal(false);
    if(props?.onClose){
      props.onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        !showModal && 'hidden'
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div className="p-2 md:p-3 flex justify-end">
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414L13.414 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 md:p-5 text-center">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
