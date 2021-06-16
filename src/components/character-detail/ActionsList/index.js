import Action from "./Action"

export default function ActionsList({actions, handleSubmit, handleAdd}) {


  const actionCards = actions.map((a, i) => (
    <div className="action-card" key={a.name + i.toString()}>
      <Action handleSubmit={handleSubmit} action={a} index={i} />
    </div>
  ))

  return (
    <>

      {actionCards}

      <input type="button" onClick={handleAdd} value="Add" />

      <br/><br/>

    </>
  )

}
