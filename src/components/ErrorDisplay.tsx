interface ErrorDisplayProps {
  errorMessage: string;
}

const ErrorDisplay = ({ errorMessage }: ErrorDisplayProps) => {
  return <div className='text-red-500 p-4'>{errorMessage}</div>;
};

export default ErrorDisplay;
