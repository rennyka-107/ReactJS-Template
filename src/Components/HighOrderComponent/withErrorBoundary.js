import React from "react";
import ErrorBoundary from "../ErrorBoundary";

const withErrorBoundary = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return (
        <ErrorBoundary>
          <WrappedComponent {...this.props} />
        </ErrorBoundary>
      );
    }
  };
};

export default withErrorBoundary;
