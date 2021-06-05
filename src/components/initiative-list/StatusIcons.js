import { useState } from 'react'

const pngs = require.context('../../assets/attribute_icons', true, /\.png/)

// Status effect statuses for a character
export default function StatusIcons({}) {

  const [statuses, setStatuses] = useState([])

  const renderStatuses = () => {
    const statusElements = statuses.map((icon, i) => (
      <button className="status-icon" key={i} name={attr}>
        <img src={pngs(attr) ? pngs(attr) : '?'} alt='' />
      </button>
    ))

    if (statuses.length < 5) {
      statusElements.push(
        <button className="attribute-button" key={-1} name={"add-status"}>
          <img src={'http://pluspng.com/img-png/free-png-plus-sign-plus-icon-512.png'} style={{filter: "invert(1)"}} alt='stuff' />
        </button>
      )
    }

    if (!statuses.length) {
      statusElements.unshift(
        <button className="attribute-button" style={{fontSize: "1.1em"}} key={0} name={"add-status-text"}>
          <span>Status</span>
        </button>
      )
    }
  }

  return (
    <div id="status-list">



    </div>
  )

}
