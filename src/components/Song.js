import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { add, updateQuantity } from '../store/librarySlice';
import {
  fetchSongsStart,
  deleteSongStart,
} from '../store/songSlice';
import { FaMusic } from 'react-icons/fa';
import {
  LibraryAdd,
  LibraryAddCheck,
  Edit,
  Delete,
  ExpandMore,
} from '@emotion-icons/material-rounded';
import SongForm from './songForm';


const Container = styled.div`
  padding: 2.8rem;
  margin-top: 4rem;
  margin-bottom: 3rem;
  background-color: #cbd5e1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 1.5rem; /* Add margin bottom for spacing */
`;

const ButtonContainer = styled.div`
  margin-left: 2.8rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
  margin-top: -1rem; /* Move cards up a little */
`;


const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: #06b6d4;
  transition: transform 0.3s;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
    background-color: #a7f3d0;
  }
`;

const CardBody = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

const CardText = styled.p`
  margin-bottom: 1rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: ${(props) =>
    props.variant === 'primary' ? '#007bff' : '#28a745'};
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? '#0056b3' : '#218838'};
  }

  span {
    display: none;
  }

  &:hover span {
    display: inline-block;
    margin-left: 0.5rem;
  }

  &:hover svg {
    display: none;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const CardFooter = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #172554;
`;

const CenteredContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  background-color: #d6d3d1;
`;

const ShowMoreButton = styled.button`
  padding: 0.75rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

const MusicIcon = styled(FaMusic)`
  width: 32px;
  height: 32px;
  margin-bottom: 1rem;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  margin: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 2rem;
`;

const Song = () => {
  const dispatch = useDispatch();
  const { data: songs, loading, error } = useSelector((state) => state.songs);
  const libraryItems = useSelector((state) => state.library);
  const [showAll, setShowAll] = useState(false);
  const [editingSong, setEditingSong] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  const addToLibrary = (song) => {
    const isItemInLibrary = libraryItems.some((item) => item.id === song.id);

    if (!isItemInLibrary) {
      dispatch(add(song));
    } else {
      const existingItem = libraryItems.find((item) => item.id === song.id);
      const updatedQuantity = existingItem.quantity + 1;
      dispatch(updateQuantity({ id: song.id, quantity: updatedQuantity }));
    }
  };

  const isInLibrary = (song) => {
    return libraryItems.some((item) => item.id === song.id);
  };

  const visibleSongs = showAll ? songs : songs.slice(0, 6);

  const handleEdit = (song) => {
    setEditingSong(song);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    console.log("Deleting song with id:", id);
    dispatch(deleteSongStart({ id }));
  };
  

  const handleAddNew = () => {
    setEditingSong(null);
    setShowForm(true);
  };

  if (loading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>Error fetching songs: {error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Addis Songs</Title>
        <ButtonContainer>
          <Button variant="primary" onClick={handleAddNew}>
            Create New Song
          </Button>
        </ButtonContainer>
      </Header>
      {showForm && (
        <SongForm
          onAdd={() => setShowForm(false)}
          onUpdate={() => {
            setShowForm(false);
            setEditingSong(null);
          }}
          initialSongData={editingSong}
        />
      )}
      <CardContainer>
        {visibleSongs.map((song) => (
          <Card key={song.id}>
            <CardBody>
              <CardTitle>{song.title}</CardTitle>
              <MusicIcon />
              <CardText>{song.artist}</CardText>
            </CardBody>
            <CardFooter>
              <Button
                variant="primary"
                onClick={() => addToLibrary(song)}
                disabled={isInLibrary(song)}
              >
                {isInLibrary(song) ? (
                  <LibraryAddCheck size={20} />
                ) : (
                  <LibraryAdd size={20} />
                )}
                <span>{isInLibrary(song) ? 'In Library' : 'Add To Library'}</span>
              </Button>
              <Button variant="" onClick={() => handleEdit(song)} title="Edit Song">
                <Edit size={20} />
                <span>Edit Song</span>
              </Button>
              <Button variant="success" onClick={() => handleDelete(song.id)} title="Delete Song">
                <Delete size={20} />
                <span>Delete</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </CardContainer>
      <CenteredContainer>
        {!showAll && (
          <ShowMoreButton onClick={() => setShowAll(true)}>
            <IconWrapper>
              <ExpandMore size={24} />
            </IconWrapper>
            <span>Show More</span>
          </ShowMoreButton>
        )}
      </CenteredContainer>
    
    </Container>
  );
};

export default Song;