// import React, { useState } from "react";
// import "./colorpalet.css";
// import { Link, Outlet } from "react-router-dom";
// import Infrared from "./Infrared";
// import RedLight from "./RedLight";

// export default function ColorPallet(props) {
//   const [value, setValue] = useState();
//   const color = props.color;
//   return (
//     <div>
//       <div className="color-class-div">
//         <div className="color-strip"></div>
//         <div className="color-pallet-parent">
//           {color.map((val, index) => {
//             return (
//               <div>
//                 <Link
//                   to={`${val.id}`}
//                   // onClick={() => {
//                   //   setValue(index);
//                   // }}

//                   className="child-divs"
//                   key={index}
//                   style={{ backgroundColor: `${val.color}` }}
//                 >
//                   <span style={{ color: `${val.color}` }}>{val.name}</span>
//                   <p>{val.cname}</p>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>

//         {/* {value == 1 ? <Infrared /> : <div></div>}
//         {value == 2 ? <RedLight /> : <div></div>} */}
//       </div>
//     </div>
//   );
// }
