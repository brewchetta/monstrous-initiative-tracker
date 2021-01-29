export const getMonsters = () => JSON.parse(localStorage.getItem("monstrous-characters"))
export const setMonsters = locals => localStorage.setItem("monstrous-characters", JSON.stringify(locals))
export const clearMonsters = () => localStorage.removeItem("monstrous-characters")
export const saveMonster = local => {
    console.log(local)
    const locals = getMonsters() ? [...getMonsters(), local] : [local]
    console.log(locals)
    setMonsters(locals)
    console.log(getMonsters())
}
