import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const LoginButton = styled.button`
  padding: 10px 25px;
  background-color: rgba(255, 0, 183, 0.8);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 0, 183, 1);
  }
`;

const SignupButton = styled.button`
  padding: 10px 25px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const AuthButtons = () => {
  const navigate = useNavigate();

  return (
    <ButtonGroup>
      <LoginButton onClick={() => navigate('/login')}>LoginPage</LoginButton>
      <SignupButton onClick={() => navigate('/login?signup=true')}>Sign Up</SignupButton>
    </ButtonGroup>
  );
};

export default AuthButtons;
