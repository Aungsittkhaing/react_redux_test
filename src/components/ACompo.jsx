import React from "react";
import { useSelector } from "react-redux";
import BCompo from "./BCompo";

const ACompo = () => {
  const account = useSelector((state) => state.account);
  return (
    <div>
      <h4>ACompo</h4>
      <p>Result | {account}</p>
      <BCompo />
    </div>
  );
};

export default ACompo;
