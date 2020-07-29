import React, { useState,useEffect }  from 'react';

import bcrypt from 'bcryptjs';

import { Container, Time, Card, Match } from './styles';
import { StringifyOptions } from 'querystring';



const Game: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [matchs, setmatchs] = useState<number>(0);
  const [cardsArray, setCardsArray] = useState(
    [
      'angular',
      'css',
      'html',
      'js',
      'php',
      'react',
      'angular',
      'css',
      'html',
      'js',
      'php',
      'react'
    ]);

  const [clicks, setClicks] = useState(0);
  const [clicksValue, setClicksValue] = useState<string>();
  const [firstElement, setFirstElement] = useState<any>();
  const [secondElement, setSecondElement] = useState<any>();



  useEffect(() => {
    handleCards();
    const interval = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    return () => clearInterval(interval);
   
  },[]);

  const embaralha:any = (lista:any)=> {

      for (let indice = lista.length; indice; indice--) {

          const indiceAleatorio = Math.floor(Math.random() * indice);
          
          // guarda de um índice aleatório da lista
          const elemento = lista[indice - 1];
          
          lista[indice - 1] = lista[indiceAleatorio];
          
          lista[indiceAleatorio] = elemento;
      }

      return lista;
  }

  const handleCards:any = () =>{
    const arrEmbaralhado = embaralha(cardsArray);
    setCardsArray(arrEmbaralhado);
  }

  const handleClick = (element:any, value:string) =>{
    // const $element = document.querySelector(element)
    element.style["width"] = "0%";
    element.style["height"] = "0%";

    if(!clicks){
      setClicks(1); 
      setClicksValue(value);
      setFirstElement(element.id); 
      return;
    }


    if(clicksValue === value){
      setmatchs(matchs+1)
      if(matchs == 6){
        setmatchs(0);
        handleCards();
      }
    }else{
      setTimeout(() => {
        element.style["width"] = "100%";
        element.style["height"] = "100%";
      document.querySelectorAll(`#${firstElement}`).forEach(function(eleme:any){
        eleme.style["width"] = "100%";
        eleme.style["height"] = "100%";
      });
    }, 1000);
    }


  
    setClicks(0);
    setClicksValue(''); 
    setFirstElement(element); 
    setSecondElement(element);

  }


  return (
    <>
      <Container>
        {cardsArray.map(function(element){
          return (
          <Card  className={`${element}`}>
            <div id={element} onClick={(e)=>handleClick(e.target, element)}>
            </div>
          </Card>
          )
        })}
      </Container>

      <Time>
        <h5>{time} Segundos</h5>
      </Time>
      <Match>
        <h5>{matchs} Match</h5>
      </Match>
    </>
  );
}

export default Game;