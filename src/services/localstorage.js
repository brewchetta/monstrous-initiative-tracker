export const getMonsters = () => JSON.parse(localStorage.getItem("monstrous-characters"))
export const setMonsters = locals => localStorage.setItem("monstrous-characters", JSON.stringify(locals))
export const clearMonsters = () => localStorage.removeItem("monstrous-characters")
export const saveMonster = local => {
    locals = getLocals() ? getLocals().push(local) : [local]
    setLocals(locals)
}
