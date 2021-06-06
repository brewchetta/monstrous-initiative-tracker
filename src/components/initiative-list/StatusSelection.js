const pngs = require.context('../../assets/status-icons', true, /\.png/)
const pngKeys = pngs.keys()

// Selection modal for different status icons
export default function StatusSelection({addStatus, isOpen, setOpen, statuses}) {

  // Renders an attribute button
  const statusButton = status => {
    return (
      <button
        className="status-button"
        key={status}
        onClick={() => {
          setOpen(!isOpen);
          addStatus(status);
        }}
      >
        <img src={pngs(status) ? pngs(status).default : '?'} alt={status} />
      </button>
    );
  };

  const renderStatusButtons = () => {
    debugger
    console.log({pngKeys, statuses});
    return pngKeys.filter(png => !statuses.includes(png)).map(status => statusButton(status))
  }

  return (
    <>
      <div id="status-selection-modal-mask" onClick={() => setOpen(false)}/>

      <div id="status-selection" style={{height: isOpen ? null : "0px"}}>

        {renderStatusButtons()}

      </div>
    </>
  )

}
