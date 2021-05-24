import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import './ItemCard.css';

const ItemCard = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <li className="card-item" onClick={handleShow}>
        <div className="card-item-content">
          <div className="card-item-image">
            <img src={props.image} />
          </div>
          <div className="card-item-info">
            <h4 className="card-item-title">
              {props.title}
              <span>{props.rating}</span>
            </h4>
            <h6>
              ${props.deliveryFee} - {props.time}
            </h6>
          </div>
        </div>
      </li>

      <Modal show={show} onHide={handleClose} className="modal-item">
        
        <div className="modal-item-image">
          <img src={props.image} />
          <div className="modal-item-icon">
            {/* <MenuBookTwoToneIcon className="book-icon"/> */}
          </div>
        </div>
        <h3 className="modal-title">
          {props.menu}
        </h3>
        <h4>Menu</h4>
        <Modal.Body>
          <ul>
            {/* {props.menu.map(menuItem => (
              <li>Author(s): {menuItem.name}</li>
            ))} */}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button className="card-item-button" onClick={handleClose}>
            CLOSE
        </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ItemCard;
