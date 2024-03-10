import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
function PopupMsg() {
    return (
        <div>
           
            <Popup trigger=
                {<button> Click Here </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Aniket
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close 
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};

export default PopupMsg;




// import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';

// const Popup1 = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleButtonClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <Button variant="primary" onClick={handleButtonClick}>
//         Click Here
//       </Button>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Alert</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Aniket Bhaii
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Popup1;
