import React from 'react'
import styled from 'styled-components'
import { SignInButton } from "./Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
`;


function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
            <Input placeholder = 'Search' />
            <SearchIcon />
        </Search>
        <SignInButton>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </SignInButton>
      </Wrapper>
    </Container>
  );
}

export default Navbar