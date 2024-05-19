interface ErrorDisplayProps {
  errorMessage: string;
  classes?: string;
}

const ErrorDisplay = ({ errorMessage, classes = 'p-4' }: ErrorDisplayProps) => {
  return <div className={`text-red-500 ${classes}`}>{errorMessage}</div>;
};

export default ErrorDisplay;
