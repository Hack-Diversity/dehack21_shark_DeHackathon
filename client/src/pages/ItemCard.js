import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

import './ItemCard.css';

const ItemCard = (props) => {	
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
	// 	props.onDiscount(props.id, props.dietary, 'Vegetarian');
	// }, [props.id, props.dietary]);

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
              ${props.deliveryFee} - {props.time} - {props.dietary}
            </h6>
            <div className='text-success discount' >{props.discount ? `Students get 10% off on ${props.dietary} orders today` : null}</div>
          </div>
        </div>
      </li>

      <Modal show={show} onHide={handleClose} className="modal-item">

        <div className="modal-item-image">
          <img src={props.image} />
        </div>
        <h3 className="modal-title">
          {props.menu}
        </h3>
        <h4>Menu</h4>
        <Modal.Body>
            {/* {props.menu} */}
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
