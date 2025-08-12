function ClickCounter({ count, setCount, title, message }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      {count >= 10 && <p>{message}</p>}
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default ClickCounter;
