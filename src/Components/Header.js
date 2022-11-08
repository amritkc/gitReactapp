import React from "react";

function Header(props) {
  console.log("propsval", props);
  return (
    <div>
      <h1> this is header {props.value}</h1>
      {props.obb.map((userdata) => {
        return (
          <>
            <h5>{userdata.name}</h5>
            <h4>{userdata.age}</h4>
          </>
        );
      })}
    </div>
  );
}

export default Header;
