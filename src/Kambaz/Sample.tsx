import { useState } from "react";

export default function Abc() {
  const [x, h] = useState(true);
  return (
    <div>
      <button onClick={() => {
        h(false);
      }}>R
      </button>
      <input type="checkbox" checked={x} onChange={() => h(!x)} id="s" />
      <label htmlFor="s">Q</label>
      {x && <h1>P</h1>}
      {!x && <h1>K</h1>}
    </div>
  );
}

//
///
/// //export default function Rew({ d = { b: "c" } }) {
//  const a = {
//    b: "b",
//    c: 1
//  };
//  const e = {
//    ...a,
//    ...d
//  };
//  return (
//    <ul>
//      <li>{e.c}</li>
//      <li>{e.b}</li>
//    </ul>
//  );
//}


//
///
/// //import { Route, Routes } from "react-router";
//import { Link, useParams } from "react-router-dom";
//
//function Def() {
//  const { v, t } = useParams();
//  const numV = Number(v); // Convert to number
//  const numT = Number(t); // Convert to number
//  return (
//    <div>
//      {numV} x {numT} = {numV * numT}
//    </div>
//  );
//}
//
//export default function Abc() {
//  return (
//    <div>
//      <Link to="a/3/5">Def</Link>
//      <Routes>
//        <Route path="a/:v/:t" element={<Def />} />
//      </Routes>
//    </div>
//  );
//}