import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { editSongStart, addSongStart } from '../store/songSlice';
import { Close } from '@emotion-icons/material-rounded';

const FormSection = styled.section`
  background-color: #d946ef;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: auto;
  position: fixed;
  top: 50%;
  right: 1;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
    position: static;
    transform: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
`;

const CloseIcon = styled(Close)`
  width: 24px;
  height: 24px;
  color: #555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 3px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 8px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;

const ClearButton = styled.button`
  margin-top: 10px;
  background-color: transparent;
  border: none;
  color: #3498db;
  font-size: 14px;
  cursor: pointer;
`;

const SongForm = ({ onAdd, onUpdate, initialSongData }) => {
  const [title, setTitle] = useState(initialSongData ? initialSongData.title : '');
  const [artist, setArtist] = useState(initialSongData ? initialSongData.artist : '');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(initialSongData ? initialSongData.title : '');
    setArtist(initialSongData ? initialSongData.artist : '');
  }, [initialSongData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || artist.trim() === '') {
      setError('Both title and artist are required.');
      return;
    }

    if (initialSongData) {
      dispatch(editSongStart({ id: initialSongData.id, title, artist }));
      onUpdate();
    } else {
      dispatch(addSongStart({ title, artist }));
      onAdd();
    }

    setTitle('');
    setArtist('');
    setError('');
  };

  const handleClear = () => {
    setTitle('');
    setArtist('');
    setError('');
  };

  return (
    <FormSection>
      <CloseButton onClick={onUpdate}><CloseIcon /></CloseButton>
      <h2>{initialSongData ? 'Edit Song' : 'Add a New Song'}</h2>
      <Form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => { setTitle(e.target.value); setError(''); }}
          aria-label="Song Title"
        />
        <Input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => { setArtist(e.target.value); setError(''); }}
          aria-label="Song Artist"
        />
        <Button type="submit">{initialSongData ? 'Update' : 'Add'}</Button>
      </Form>
      <ClearButton onClick={handleClear}>Clear</ClearButton>
    </FormSection>
  );
};

export default SongForm;
