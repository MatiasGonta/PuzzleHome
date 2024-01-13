import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorComponent } from "../ErrorComponent";

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ error: error });
  }

  render() {
    if (this.state.hasError) {
      let errorMsg = this.state.error && this.state.error.message;

      return (
        <ErrorComponent error={errorMsg as string} />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;