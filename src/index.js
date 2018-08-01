import React from "react";
import { Loader } from "./LoaderStyle";

const loadingManager = config => (target, key, descriptor) => {
  // Store the original render method on the target.
  target.renderOnLoad = target.renderOnLoad || descriptor.value;
  descriptor.value = function() {
    // bind `this` so the render function
    // can access the original state
    const render = target.renderOnLoad.bind(this);
    const { isLoading } = this.state;
    let contents;
    if (isLoading === undefined || isLoading === true) {
      contents = null;
    } else {
      contents = render();
    }
    return (
      <LoadingWrapper isLoading={isLoading} {...config}>
        {contents}
      </LoadingWrapper>
    );
  };
  return descriptor;
};

const LoadingWrapper = props => {
  if (props.children === null) {
    return <LoadingIndicator {...props} />;
  } else {
    return <div>{props.children}</div>;
  }
};

const LoadingIndicator = ({ size, color, duration }) => {
  return <Loader size={size} color={color} duration={duration} />;
};

export { loadingManager };
