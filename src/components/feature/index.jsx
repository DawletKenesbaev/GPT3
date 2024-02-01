import React from 'react';
import { Wrapper } from './style';

const Feature = ({ title, text }) => (
  <Wrapper className="gpt3__features-container__feature">
    <Wrapper.Title className="gpt3__features-container__feature-title">
        <div />
      <h1>{title}</h1>
    </Wrapper.Title>
    <Wrapper.Text className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </Wrapper.Text>
  </Wrapper>
);

export default Feature;