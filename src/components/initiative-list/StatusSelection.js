const pngs = require.context('../../assets/status-icons', true, /\.png/)
const pngKeys = pngs.keys()

// Selection modal for different status icons
export default function StatusSelection({statuses, addStatus, isOpen, setOpen}) {

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
        <p>Button</p>
        <img src={pngs(status) ? pngs(status) : '?'} alt='' />
      </button>
    );
  };

  const renderStatusButtons = () => {
    return pngKeys.map(status => statusButton(status))
  }

  return (
    <div id="status-selection" style={{height: isOpen ? null : "0px"}}>

      <p>{isOpen ? "I'm open" : "Nah closed"}</p>

      {renderStatusButtons()}

    </div>
  )

}
