import React,{useState} from 'react'
import styled from 'styled-components';
import { Modal } from './Modal'

const Container = styled.div`
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 6px 20px;
  border-radius: 50px;
  border: none;
  background: red;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Settings = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <Container>
        <Button onClick={openModal}>Add User</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
    
      </Container>
  )
}

export default Settings