import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { beverageList } from "./actions/Actions";
import { buyBeverage } from "./actions/Action2";
import { coffee } from "./actions/Coffee";
import { tea } from "./actions/Tea";
import { milk } from "./actions/Milk";

function App() {
  const page = useSelector((state) => state.page);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> {page}</h1>
      <button
        onClick={() =>
          dispatch(
            beverageList(
              <ul className="list">
                <li>coffee = Rs 50</li>
                <li>Tea = Rs 30</li>
                <li>Milk = Rs 30</li>
              </ul>
            )
          )
        }
      >
        Beverarge list
      </button>
      <button
        onClick={() =>
          dispatch(
            buyBeverage(
              <span>
                <button onClick={() => dispatch(coffee("Rs. 50 paid"))}>
                  Buy coffee
                </button>

                <button onClick={() => dispatch(tea("Rs. 30 paid"))}>
                  Buy tea
                </button>

                <button onClick={() => dispatch(milk("Rs. 30 paid"))}>
                  Buy milk
                </button>
              </span>
            )
          )
        }
      >
        Buy a beverage
      </button>
    </div>
  );
}

export default App;
