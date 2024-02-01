import React from 'react';
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';

import styled from 'styled-components';

const Brand = () => (
  <Wrapper className="section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </Wrapper>
);
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    div {
      flex: 1;
    max-width: 150px;
    min-width: 120px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    }

`
export default Brand;