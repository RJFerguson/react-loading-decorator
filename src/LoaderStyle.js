import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
border-radius: 50%;
width: 10em;
height: 10em;
font-size: ${props => props.size || "8"}px;
border-top: 1.1em solid rgba(0, 0, 0, 0);
border-right: 1.1em solid rgba(0, 0, 0, 0);
border-bottom: 1.1em solid rgba(0, 0, 0, 0);
border-left: 1.1em solid ${props => props.color || "black"};
animation: ${rotate360} ${props => props.duration || "1.1"}s infinite linear;
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
}`;

export { Loader };
