import styled from 'styled-components';

export const Container = styled.div`
 display:flex;
 align-items: center;
  flex-direction: column;

  >h1{
    margin-bottom:55px;
  }
  >a{
  text-decoration:none;

  }
`;

export const Logo = styled.div`
  font-size:166px;
`;
export const ButtonCustom = styled.div`
  border: 1px solid var(--border);
  width:150px;
  height:70px;
  border-radius:10%;
  cursor:pointer;

  margin-bottom:10px;
  display:flex;
  justify-content:center;
  align-items:center;

  &:hover{
    background:var(--border);
    color:white;
  }

 
`;
