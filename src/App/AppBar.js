import React from 'react';
import styled from 'styled-components';
const Bar=styled.div`
  display: grid;
grid-template-columns: auto 180px 100px 100px;
`
export default function(){
  return<Bar> 
    <div>CryptoMania</div>
    <div>CryptoDash</div>
    <div>Settings</div>
  </Bar>
}