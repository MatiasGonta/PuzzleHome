import { ErrorComponent } from "@/components";
import { useRouteError } from "react-router-dom";

interface Error {
  message: string;
  stack: string;
}

interface RouteError {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: Error;
}

export interface ErrorInterface {}

const Error: React.FC<ErrorInterface> = () => {
  const error: RouteError = useRouteError() as RouteError;
  document.title = `Puzzle Home | Error ${error.status}`;

  return (
    <ErrorComponent error={error.error.message || error.statusText} />
  )
}

export default Error