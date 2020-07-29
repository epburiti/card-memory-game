import styled from "styled-components";

import angular from '../../Assets/images/angular.png'
import css from '../../Assets/images/css.png'
import html from '../../Assets/images/html.png'
import js from '../../Assets/images/js.png'
import php from '../../Assets/images/php.png'
import react from '../../Assets/images/react.png'


export const Container = styled.div`
  display:inline-block;  
  width: 100%;

  >.angular{
    background-image:url(${angular});
    background-repeat: no-repeat;
    background-size: 75% 75%;
    background-position:center;

  }
  >.css{
    background-image:url(${css});
    background-repeat: no-repeat;
    background-size: 45% 65%;
    background-position:center;

  }
  >.html{
    background-image:url(${html});
    background-repeat: no-repeat;
    background-size: 75% 75%;
    background-position:center;

  }
  >.js{
    background-image:url(${js});
    background-repeat: no-repeat;
    background-size: 75% 75%;
    background-position:center;

  }
  >.php{
    background-image:url(${php});
    background-repeat: no-repeat;
    background-size: 75% 75%;
    background-position:center;

  }
  >.react{
    background-image:url(${react});
    background-repeat: no-repeat;
    background-size: 75% 75%;
    background-position:center;

  }
`;


export const Time = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 20px 20px 0;
  >h5{
    color:var(--border);
    font-size:18px;
  }
`;
export const Match = styled.div`
    position: absolute;
    bottom: 0;
    margin: 20px 0 20px 20px;
  >h5{
    color:var(--border);
    font-size:18px;
  }
`;


export const Card = styled.div`
  border: 1px solid var(--border);
  width:20%;
  height:120px;
  margin-right:3%;
  margin-left:2%;
  margin-top:4%;
  border-radius:10%;
  cursor:pointer;

  margin-bottom:10px;
  display:inline-block; 

  /* display:flex;
  justify-content:center;
  align-items:center; */
  
  >div{
    width: 100%;
    height: 100%;
    background:var(--borderNotLight);
    border-radius:10%;
   transition: height 0.2s ease-out;
  }
 

`