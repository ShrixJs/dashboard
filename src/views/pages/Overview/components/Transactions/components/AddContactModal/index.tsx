import React, { useState } from 'react'
import Modal from 'react-modal';

import './AddContactModal.scss';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../../../../../store/usersSlice';

const AddContactModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(name));
    setName('');
    setIsOpen(false);
  }

  return (
    <Modal
      className="modal"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      contentLabel="Add contact modal"
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
    >
      <div className="form-header">
        <h3>Add contact</h3>
        <button className='close' onClick={() => setIsOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="contact-form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button type="submit" disabled={!name} className={name ? '' : 'not-allowed'}>Add</button>
      </form>
    </Modal>
  );
};

export default AddContactModal;