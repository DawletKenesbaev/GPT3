import styled from "styled-components";


export const Wrapper = styled.div`
   width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    @media screen and (max-width: 990px) {
    flex-direction: column;
    }
    .container {
      flex: 1.5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    }

`
