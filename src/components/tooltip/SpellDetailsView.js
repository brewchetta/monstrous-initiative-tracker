export default function SpellDetailsView({spellDetails}) {

  console.log(spellDetails)

  return (
    <>

    {spellDetails.error ? <p>"Unable to fetch that spell, sorry!"</p> : null}
    {spellDetails.name ? <p>{spellDetails.name}</p> : null}
    <p>
      {<span>{spellDetails.level ? `Level ${spellDetails.level}` : spellDetails.level === 0 && "Cantrip"}</span>}{spellDetails.casting_time ? <span>  |  Casting Time: {spellDetails.casting_time}</span> : null}{spellDetails.duration ? <span>  |  Duration: {spellDetails.duration}</span> : null}
    </p>
    <p>{spellDetails.concentration ? <span>Concentration</span> : null}</p>
    <p>
      {spellDetails.components ? <span>Components: {spellDetails.components.join(" ")}</span> : null}{spellDetails.material ? <span> |  Materials: {spellDetails.material}</span> : null}{spellDetails.ritual ? <span>  |  Can be cast as a ritual</span> : null}
    </p>
    {spellDetails.desc ? <p>{spellDetails.desc}</p> : null}
    {spellDetails.school ? <span>School: {spellDetails.school.name}</span> : null}

    </>
  )

}
