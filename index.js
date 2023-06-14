const redux = require("redux");
const rootReducer = (state = { count: 0 }, action) => {
  console.log({
    state,
    action,
  });
  switch (action.type) {
    case "Increment": {
      return {
        count: state.count + 2,
      };
    }
    case "Decrement": {
      return {
        count: state.count - 1,
      };
    }
    case "IncrementByValue": {
      return {
        count: state.count + action.payload.value,
      };
    }
    case "DecrementByValue": {
      return {
        count: state.count - action.payload.value,
      };
    }
    default:
      return state;
  }
};
const store = redux.createStore(rootReducer, {
  count: 0,
});
const triggeredOnStateUpdate = () => {
  const data = store.getState();
  console.log(data);
};
store.subscribe(triggeredOnStateUpdate);
store.dispatch({
  type: "Increment",
}); //in this that we pass called as an action
store.dispatch({
  type: "Decrement",
});
7011630679;

store.dispatch({
  type: "IncrementByValue",
  payload: {
    value: Math.floor(Math.random() * 1000),
  },
});
store.dispatch({
  type: "DecrementByValue",
  payload: {
    value: 5,
  },
});
