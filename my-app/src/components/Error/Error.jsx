const Error = ({ error, resetErrorBoundary }) => {
  return (
    <div className="text-center">
      <strong className="block">에러가 발생했습니다!!</strong>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </div>
  );
};

export default Error;
