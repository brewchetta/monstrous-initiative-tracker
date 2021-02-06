import Action from "./Action"

export default function ActionsList({actions, handleSubmit}) {

  return actions.map((a, i) => (
    <div className="action-card" key={a.name + i.toString()}>
      <Action handleSubmit={handleSubmit} action={a} index={i} />
    </div>
  ))

}
