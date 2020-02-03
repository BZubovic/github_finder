import React, { useState, useContext } from 'react';

interface searchProps {
  searchUsers: Function;
  clearUsers: () => void;
  showClear?: boolean;
  setAlert: Function;
}
const Search: React.FC<searchProps> = ({
  searchUsers,
  showClear,
  clearUsers,
  setAlert
}) => {
  const [text, setText] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    setText(e.currentTarget.value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
