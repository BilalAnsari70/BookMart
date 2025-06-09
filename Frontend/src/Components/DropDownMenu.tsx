import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 10px 20px;
  background-color: rgba(0,0,0,0.7);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const DropdownContent = styled.div`
  position: absolute;
  background-color: rgba(0,0,0,0.9);
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 5px;
`;

const DropdownItem = styled.div`
  color: white;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255,255,255,0.1);
  }
`;

const DropdownMenu = ({ items }: { items: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        Menu ▾
      </DropdownButton>

      {isOpen && (
        <DropdownContent>
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              onClick={() => {
                console.log(`Selected: ${item}`);
                setIsOpen(false);
              }}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownWrapper>
  );
};

export default DropdownMenu;
