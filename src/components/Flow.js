import React from "react";
import styled from "styled-components";

const Flow = () => {
  console.log(window.innerHeight + window.pageYOffset);
  return <Div>yo</Div>;
};

const Div = styled.div`
  height: 812px;
  background: black;
`;

export default Flow;
