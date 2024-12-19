import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import Modal from 'react-modal';

import { addUser } from '../../../../../../../store/usersSlice';

import './AddContactModal.scss';

const AddContactModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const closeModal = () => {
    setName('');
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(name));
    closeModal();
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
        <button className='close' onClick={closeModal}>
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name *</label>
        <input id="name" type="text" placeholder="Please enter a name" value={name} onChange={(e) => setName(e.target.value)}/>
        <button type="submit" disabled={!name}>Add</button>
      </form>
    </Modal>
  );
};

export default AddContactModal;