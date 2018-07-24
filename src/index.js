import React from "react";
const MyComponent = () => <h1>Hello from My Component</h1>;
export default MyComponent;

// import React, { Component, Fragment } from "react";
// import styled, { keyframes } from "styled-components";

// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Loader = styled.div`
// border-radius: 50%;
// width: 10em;
// height: 10em;
// font-size: ${props => props.size || "8"}px;
// border-top: 1.1em solid rgba(0, 0, 0, 0);
// border-right: 1.1em solid rgba(0, 0, 0, 0);
// border-bottom: 1.1em solid rgba(0, 0, 0, 0);
// border-left: 1.1em solid ${props => props.color || "black"};
// animation: ${rotate360} ${props => props.duration || "1.1"}s infinite linear;
//   &:after {
//     border-radius: 50%;
//     width: 10em;
//     height: 10em;
//   }
// }`;

// const loadingManager = config => (target, key, descriptor) => {
//   // Store the original render method on the target.
//   target.renderOnLoad = target.renderOnLoad || descriptor.value;
//   descriptor.value = function() {
//     // bind `this` so the render function
//     // can access the original state
//     const render = target.renderOnLoad.bind(this);
//     const { isLoading, isReloading } = this.state;
//     let contents;
//     if (isLoading === undefined || isLoading === true) {
//       contents = null;
//     } else {
//       contents = render();
//     }
//     return (
//       <LoadingWrapper
//         isLoading={isLoading}
//         isReloading={isReloading}
//         {...config}
//       >
//         {contents}
//       </LoadingWrapper>
//     );
//   };
//   return descriptor;
// };

// export const LoadingWrapper = props => {
//   if (props.children === null) {
//     return <LoadingIndicator {...props} />;
//   } else {
//     return <div>{props.children}</div>;
//   }
// };

// const LoadingIndicator = ({ size, color, duration }) => {
//   return <Loader size={size} color={color} duration={duration} />;
// };

// exports.default = loadingManager;
