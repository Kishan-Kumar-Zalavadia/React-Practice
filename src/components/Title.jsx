import React from 'react'

function title({name, college}) {
  // const { name, college } = props;
  return <h1 style={{ backgroundColor: "pink" }}>{name} from {college}</h1>;
}

export default title