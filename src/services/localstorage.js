export const getMonsters = () => JSON.parse(localStorage.getItem("monstrous-characters"))
export const setMonsters = locals => localStorage.setItem("monstrous-characters", JSON.stringify(locals))
export const clearMonsters = () => localStorage.removeItem("monstrous-characters")
export const saveMonster = local => {
    const locals = getMonsters() ? getMonsters().map(m => m.name === local.name ? local : m) : [local]
    setMonsters(locals)
}
