import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { remove } from '../store/librarySlice';
import { FaTrash, FaTimes } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';


const EmptyMessage = styled.p`
  text-align: center;
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 2rem;
  cursor: pointer; /* Enable pointer cursor */
  transition: color 0.3s ease; /* Smooth color transition on hover */
  color: #007bff; /* Default color */
  
  &:hover {
    color: #333; /* Change color on hover */
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjusted for responsiveness */
  gap: 1.5rem;
  padding: 2rem;
  margin-top: 1rem;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 350px;
  min-height: 200px; /* Adjusted min-height */
  display: flex;
  flex-direction: column;
  position: relative; 
  background-color:#06b6d4;
  
  &:hover {
    background-color: #3b82f6;
  }
`;


const CardBody = styled.div`
  padding: 1.5rem;
  justify-content: center;
`;

const MusicIcon = styled(FaMusic)`
 width: 64px;
  height: 64px;
  margin-bottom: 1rem;
`;

const CardFooter = styled.div`
padding: 1rem;
margin-top: auto;
display: flex;
justify-content: center;
background-color: #172554;
`;
const Container = styled.div`
  padding: 2.8rem;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 3rem;
  background-color: #cbd5e1;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const TrashIcon = styled(FaTrash)`
  margin-right: 0.5rem;
`;

const TotalSongs = styled.p`
  text-align: center;
  color: #16a34a;
  font-size: 20px;
  margin-top: 2rem; /* Adjusted margin top for spacing */
`;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalBody = styled.div`
  margin-top: 1rem;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ModalCancelButton = styled.button`
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 1rem;
`;

const ModalRemoveButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;


const Library = () => {
  const librarySongs = useSelector(state => state.library);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = React.useState(false);
  const [selectedSongId, setSelectedSongId] = React.useState(null);

  const handleCloseModal = () => setShowModal(false);

  const removeSong = id => {
    setShowModal(true);
    setSelectedSongId(id);
  };

  const handleConfirmRemove = () => {
    dispatch(remove(selectedSongId));
    setShowModal(false);
  };

  const handleCancelRemove = () => {
    setShowModal(false);
    setSelectedSongId(null); // Reset selectedSongId
  };

  return (
    <Container>
      <Title>Your Library </Title>
      {librarySongs.length === 0 ? (
        <EmptyMessage>Your favorite songs list is empty.</EmptyMessage>
      ) : (
        <>
          <CardContainer>
            {librarySongs.map(song => (
              <Card key={song.id}>
                <CardBody>
                  <h5>{song.title}</h5>
                  <p>Artist: {song.artist}</p>
           
              <MusicIcon />

                </CardBody>
                <CardFooter>
                  <RemoveButton onClick={() => removeSong(song.id)}>
                    <TrashIcon />
                    Remove
                  </RemoveButton>
                </CardFooter>
              </Card>
            ))}
          </CardContainer>
          <TotalSongs>Total Songs: {librarySongs.length}</TotalSongs>
        </>
      )}
      {showModal && (
        <Modal>
          <ModalHeader>
            <ModalCloseButton onClick={handleCloseModal}>
              <FaTimes />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <h3>Remove Song</h3>
            <p>Are you sure you want to remove this song from your favorites?</p>
          </ModalBody>
          <ModalFooter>
            <ModalCancelButton onClick={handleCancelRemove}>Cancel</ModalCancelButton>
            <ModalRemoveButton onClick={handleConfirmRemove}>Remove</ModalRemoveButton>
          </ModalFooter>
        </Modal>
      )}
    </Container>
  );
};

export default Library;
