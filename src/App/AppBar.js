import React from 'react';
import styled,{css} from 'styled-components';

const Logo = styled.div`
font-size: 1.5em;
`
const Bar=styled.div`
  display: grid;
grid-template-columns: auto 180px 100px 100px;
`

const ControlButtonElem=styled.div`
  cursor:pointer;
${props=>props.active && css`
    color:yellow;
    text-shadow: 0px 0px 60px #03ff03;
  `}
`
function toProperCase(lower){
  return lower.charAt(0).toUpperCase()+lower.substr(1);
}
function ControlButton({name,active}){
  return(
    <ControlButtonElem active={active}>
      {toProperCase(name)}
    </ControlButtonElem>
  )
}
export default function(){
  return<Bar> 
      <Logo>CryptoMania</Logo>
      <ControlButton active name={"CryptoDash"}/>
      <ControlButton active name="Settings"/>
  </Bar>
}