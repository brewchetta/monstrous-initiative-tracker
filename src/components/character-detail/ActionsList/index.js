import Action from "./Action"

export default function ActionsList({actions, handleSubmit, handleAdd}) {

  console.log(actions);

  const actionCards = actions.map(a => (
    <div className="action-card" key={a.id}>
      <Action handleSubmit={handleSubmit} action={a} />
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
