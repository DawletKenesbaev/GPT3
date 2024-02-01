import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 6rem;
  @media screen and (max-width: 700px) {
   padding: 2rem 4rem;
}
   @media screen and (max-width: 550px) {
        padding: 2rem;
    }

`
Wrapper.Links = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logo {
      margin-right: 2rem;
    }
    .logo img {
      width: 62.56px;
      height: 16.02px;
    }
`
Wrapper.Container = styled.div`
     display: flex;
    flex-direction: row;
    @media screen and (max-width: 1050px) {
      display: none;
    }

`
Wrapper.SignIn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 550px) {
    }
 
`

Wrapper.Paragraph = styled.p`
     color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
`
Wrapper.Button = styled.button`
       padding: 0.5rem 1rem;
    color: #fff;
    background: #FF4820;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;

`
Wrapper.Menu = styled.div`
   margin-left: 1rem;
display: none;
position: relative;
svg {
    cursor: pointer;
}
@media screen and (max-width: 1050px) {
      display: flex;
    }
`
Wrapper.MenuContainer = styled.div`
 display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 15px ;
    text-align: end;
    background: var(--color-footer);
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 40px;
    margin-top: 1rem;
    min-width: 210px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0,0, 0,0.2);    
    p {
      margin: 1rem 0;
    }
    .links {
      text-align: center;
    }
    @media screen and (max-width: 550px) {
      top: 20px;
    }

`

