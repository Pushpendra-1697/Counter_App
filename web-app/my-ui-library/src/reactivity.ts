type Listener = () => void;

export function createState(initialState: any) {
  let state = initialState;
  const listeners: Listener[] = [];

  function getState() {
    return state;
  }

  function setState(newState: any) {
    state = newState;
    listeners.forEach(listener => listener());
  }

  function subscribe(listener: Listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return { getState, setState, subscribe };
}
