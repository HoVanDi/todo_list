import React from 'react'

const BoxList = (props) => {

  const BoxItem = (props) => {
    return (
      <li>
        {props.propsBox}
      </li>
    )
  };

  const boxList = props.boxList; 
  return (
    <ul className="box-list">
            {boxList.map((itemBox) =>
        <BoxItem propsBox={itemBox} />
      )}
    </ul>
  )
}

export default BoxList
