import React from 'react';
import './TextInput.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/SearchTwoTone';

const TextInput = (props) => {
  return (
    <form className='text-input' onSubmit={props.onSubmitHandler}>
      <TextField
        required
        id='filled-required'
        label='Required'
        placeholder='Search'
        variant='filled'
        onChange={props.onChangeHandler}
      />
      <Button variant='contained' startIcon={<SearchIcon />}>
        Search
      </Button>
    </form>
  );
};

export default TextInput;
