import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./stores/ActionCreator";
import ACompo from "./components/ACompo";

const App = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const account = useSelector((state) => state.account);
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { add, remove, insert, drop } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const addUser = (e) => {
    e.preventDefault();
    let user = {
      phone: phoneRef.current.value,
      name: nameRef.current.value,
    };
    insert(user);
    phoneRef.current.value = "";
    nameRef.current.value = "";
  };

  return (
    <div>
      <h4>{account}</h4>
      <button onClick={() => add(50)}>Add</button>
      <button onClick={() => remove(50)}>Remove</button>
      <hr />
      <ACompo />
      <hr />
      {users.map((user) => (
        <p onClick={() => drop(user)}>
          {user.name} : {user.phone}
        </p>
      ))}
      <form onSubmit={addUser}>
        <input type="text" ref={phoneRef} />
        <br />
        <br />
        <input type="text" ref={nameRef} />
        <br />
        <br />
        <button type="submit" onClick={() => addUser()}>
          Click
        </button>
      </form>
    </div>
  );
};

export default App;
