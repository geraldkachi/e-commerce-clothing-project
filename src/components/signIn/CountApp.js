import React from "react";
import { connect } from "react-redux";

const CountApp = (increment, decrement, value) => {
  return (
    <div>
      <div className='justify-content-between'>
        <button onClick={increment}>Add 1</button>
          <div className='mx-5 bg-dark' >{value}</div>
        <button onClick={decrement}>Minus 1</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.count.value,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
})

export default connect(mapStateToProps, mapDispatchToProps)(CountApp);
