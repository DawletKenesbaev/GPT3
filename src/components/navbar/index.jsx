import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

import { Wrapper } from './style';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Wrapper className="gpt3__navbar">
      <Wrapper.Links>
        <div className="logo">
          <img src={logo} />
        </div>
        <Wrapper.Container>
          <Wrapper.Paragraph><a href="#home">Home</a></Wrapper.Paragraph>
          <Wrapper.Paragraph><a href="#wgpt3">What is GPT3?</a></Wrapper.Paragraph>
          <Wrapper.Paragraph><a href="#possibility">Open AI</a></Wrapper.Paragraph>
          <Wrapper.Paragraph><a href="#features">Case Studies</a></Wrapper.Paragraph>
          <Wrapper.Paragraph><a href="#blog">Library</a></Wrapper.Paragraph>
        </Wrapper.Container>
      </Wrapper.Links>
      <Wrapper.SignIn >
        <Wrapper.Paragraph>Sign in</Wrapper.Paragraph>
        <Wrapper.Button type="button">Sign up</Wrapper.Button>
      </Wrapper.SignIn>
      <Wrapper.Menu >
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <Wrapper.MenuContainer className="scale-up-center">
          <div className="links">
            <Wrapper.Paragraph><a href="#home">Home</a></Wrapper.Paragraph>
            <Wrapper.Paragraph><a href="#wgpt3">What is GPT3?</a></Wrapper.Paragraph>
            <Wrapper.Paragraph><a href="#possibility">Open AI</a></Wrapper.Paragraph>
            <Wrapper.Paragraph><a href="#features">Case Studies</a></Wrapper.Paragraph>
            <Wrapper.Paragraph><a href="#blog">Library</a></Wrapper.Paragraph>
          </div>
        </Wrapper.MenuContainer>
        )}
      </Wrapper.Menu>
    </Wrapper>
  );
};

export default Navbar;