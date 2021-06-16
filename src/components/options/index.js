import { useState, useContext } from 'react'
import { useOptionsSettings } from "context/options-settings-context"
import gears from "assets/status-icons/gears.png"
import "./style.css"

export default function OptionsMenu(props) {

  const {options, setOptions} = useOptionsSettings()

  const [open, setOpen] = useState(false)

  const handleChangeHitpoints = () => {
    setOptions({...options, randomHitpoints: !options.randomHitpoints})
  }

  const handleChangeInitiative = () => {
    setOptions({...options, preRolledInitiative: !options.preRolledInitiative})
  }

  const optionsModal = (
    <>
      <div id="options-modal-mask" onClick={() => setOpen(false)} />

      <div id="options-modal">

        <span>Random Hitpoints</span>

        <input type="checkbox"
        onChange={handleChangeHitpoints}
        checked={options.randomHitpoints}
        />

        <span>Autoroll Initiative</span>

        <input type="checkbox"
        onChange={handleChangeInitiative}
        checked={options.preRolledInitiative}
        />

      </div>
    </>
  )

  return (
    <>

      <div id="options-button">

        <span id="options-label">Options</span>

        <img id="options-button-icon" src={gears} alt="Options" onClick={() => setOpen(!open)} />

      </div>


      {open ? optionsModal : null}

    </>
  )

}
