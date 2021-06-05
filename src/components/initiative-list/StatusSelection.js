const pngs = require.context('../../assets/attribute_icons', true, /\.png/)
const icons = pngs.keys()

// Selection modal for different status icons
export default function StatusSelection({statuses, addStatus, removeStatus, isOpen, toggleIsOpen}) {

  // Renders an attribute button
  const statusButton = status => {
    return (
      <button
        className="attribute-button"
        key={attr}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!participantAttributes || participantAttributes.length <= 7) {
            handleAttributeAdd(attr);
          }
        }}
      >
        <img src={pngs(attr) ? pngs(attr) : '?'} alt='' />
      </button>
    );
  };

  return (

  )

}
