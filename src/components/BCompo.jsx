import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../stores/ActionCreator";

export default function BCompo() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { add, remove } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h4>BCompo</h4>
      <p>Result | {account}</p>
      <button onClick={() => add(50)}>Add</button>
      <button onClick={() => remove(50)}>Remove</button>
    </div>
  );
}
