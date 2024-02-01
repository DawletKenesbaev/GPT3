import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

import { Wrapper } from './style';
const Header = () => (
  <Wrapper className="gpt3__header section__padding" id="home">
    <Wrapper.headerContent >
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <Wrapper.headerInput className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <Wrapper.Button type="button">Get Started</Wrapper.Button>
      </Wrapper.headerInput>
      <Wrapper.people >
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </Wrapper.people>
    </Wrapper.headerContent>

    <Wrapper.headerImg >
      <img src={ai} />
    </Wrapper.headerImg>
  </Wrapper>
);

export default Header;