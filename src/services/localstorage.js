export const getMonsters = () => JSON.parse(localStorage.getItem("monstrous-characters"))
export const setMonsters = locals => localStorage.setItem("monstrous-characters", JSON.stringify(locals))
export const clearMonsters = () => localStorage.removeItem("monstrous-characters")
export const saveMonster = local => {
    let locals = getMonsters() ? getMonsters().map(m => m.name === local.name ? local : m) : [local]
    if (!locals.find(m => m.name === local.name)) {
      locals = [...locals, local]
    }
    setMonsters(locals)
}
