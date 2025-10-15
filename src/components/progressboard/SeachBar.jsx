import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <InputGroup className="mb-4 shadow-sm">
      <Form.Control
        placeholder="Search participant by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-end-0"
      />
      <InputGroup.Text className="bg-white border-start-0">
        <FaSearch />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default SearchBar;
