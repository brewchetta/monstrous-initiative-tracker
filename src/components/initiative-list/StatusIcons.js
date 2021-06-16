import { useState } from 'react'
import StatusSelection from './StatusSelection'
import plus from 'assets/plus.png'

const pngs = require.context('assets/status-icons', true, /\.png/)

// Status effect statuses for a character
export default function StatusIcons({hitpointPercentage}) {

  const [statuses, setStatuses] = useState([])
  const [selectionOpen, setSelectionOpen] = useState(false)

  const removeStatus = status => setStatuses(statuses.filter(s => s !== status))

  const addStatus = status => setStatuses([...statuses, status])

  const renderStatuses = () => {
    const statusElements = statuses.map(status => (
      <button className="status-icon status-button" key={status} name={status}
      onClick={() => removeStatus(status)}>
        <img src={pngs(status) ? pngs(status).default : '?'} alt={status} />
      </button>
    ))

    if (statuses.length < 5) {
      statusElements.push(
        <button className="status-button" key={-1} name={"add-status"}
        onClick={() => setSelectionOpen(true)}>
          <img src={plus} alt='stuff' />
        </button>
      )
    }

    return statusElements
  }

  const renderBackgroundColor = () => {
    return hitpointPercentage > 0.5 ? "#64994C"
    : hitpointPercentage > 0 ? "#E4AC4C" : "#E4594C"
  }

  return (
    <div id="status-list" style={{backgroundColor: renderBackgroundColor()}}>

      {renderStatuses()}

      {selectionOpen ? (
        <StatusSelection isOpen={selectionOpen}
        setOpen={setSelectionOpen}
        statuses={statuses}
        addStatus={addStatus}/>)
      : null }

    </div>
  )

}
