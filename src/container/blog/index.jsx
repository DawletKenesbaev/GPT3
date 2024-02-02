import React from 'react';
import Article from '../../components/article';


import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';
import styled from 'styled-components';




const Blog = () => (
  <Wrapper className="section__padding" id="blog">
    <div className="heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="container">
      <div className="container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </Wrapper>
);
const Wrapper = styled.div`
  
    display: flex;
    flex-direction: column;    
.heading {
    width: 100%;
    text-align: left;

    margin-bottom: 5rem;
}

.heading h1 {
    font-size: 62px;
    line-height: 75px;
    font-family: var(--font-family);
    font-weight: 800;
}

.container {
    display: flex;
    flex-direction: row;
}

.container_groupA {
    flex: 0.75;
    margin-right: 2rem;
}

.container_groupB {
    flex: 1;

    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
}

@media screen and (max-width: 990px) {
    .container {
        flex-direction: column-reverse;
    }


    .container_groupA {
        margin: 2rem 0;
    }

    .container_groupA .container_article  {
       width: 48%;
    }

    .container_groupA .container_article-image {
        height: 250px;
    }
}

@media screen and (max-width: 700px) {
    .container_groupB {
        grid-template-columns: repeat(1, 1fr);
    }

    .container_groupA .container_article  {
       width: 100%;
    }

    .heading h1 {
        font-size: 46px;
        line-height: 52px;
    }
}

@media screen and (max-width: 550px) {
    .heading h1 {
        font-size: 34px;
        line-height: 42px;
    }

}
`

export default Blog;