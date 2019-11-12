import React from 'react';
import './SearchBox.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (
  <div>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        // onChange={e => this.setState({serachField: e.target.value})}
      />
  </div>
)