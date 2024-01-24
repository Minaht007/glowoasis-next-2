export const Counter = ({ count, setCount }) => {
  return (
    <div className="flex border w-[120px] h-[54px] justify-between pl-[9px] pr-[9px] bg-btn-bg-primery-color">
      <div className="flex items-center">
        <button onClick={() => setCount(count + 1)} className="flex justify-center items-center">
          +
        </button>
      </div>
      <div className="flex justify-center items-center">
        <p>{count}</p>
      </div>
      <div className="flex justify-center">
        <button onClick={() => count > 1 && setCount(count - 1)} className="flex justify-center items-center">
          -
        </button>
      </div>
    </div>
  );
}