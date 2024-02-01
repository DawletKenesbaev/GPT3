import React from 'react';
import Feature from '../../components/feature/index';
import styled from 'styled-components';

const WhatGPT3 = () => (
  <Gpt3 className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <Gpt3.feature className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </Gpt3.feature>
    <Gpt3.heading className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </Gpt3.heading>
    <Gpt3.container className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </Gpt3.container>
  </Gpt3>
);
const Gpt3 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: var(--color-footer);
    background:-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
    background:-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
    background:-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
    background:-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
    background:radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
Gpt3.feature = styled.div`
    display: flex;
`
Gpt3.heading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 0 2rem;
    h1 {
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    font-family: var(--font-family);
    max-width: 510px;
    @media screen and (max-width: 650px) {
      font-size: 28px;
        line-height: 40px;
    }
}
p {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: var(--color-subtext);
    cursor: pointer;
}
   
   @media screen and (max-width: 850px) {
     
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0rem;
    p {
        margin-top: 1rem;
    }
  }
`
Gpt3.container = styled.div`
     display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    margin-top: 2rem;

`
export default WhatGPT3;