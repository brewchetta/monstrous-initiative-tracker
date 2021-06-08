import { useState, useContext } from 'react'
import OptionsSettingsContext from "../../context/options-settings-context"
import gears from "../../assets/status-icons/gears"
import "./style.css"

export default function OptionsMenu(props) {

  const [options, dispatchOptions] = useContext(OptionsSettingsContext)

  const [open, setOpen] = useState(false)

  const handleChangeHitpoints = () => {

  }

  const handleChangeInitiative = () => {

  }

  const optionsModal = (
    <>
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

      <div id="options-modal-mask" onClick={() => setOpen(false)} />
    </>
  )

  return (
    <>

      <img id="options-button" src={gears} alt="Options" onClick={() => setOpen(true)} />

      {open ? optionsModal : null}

    </>
  )

}
