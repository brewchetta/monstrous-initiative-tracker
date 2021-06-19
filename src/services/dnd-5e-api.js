// URLS //
const BASEURL = 'https://www.dnd5eapi.co/api/'

const url = {
  equipment: BASEURL + 'equipment/',
  magicItems: BASEURL + 'magic-items/',
  spells: BASEURL + 'spells/',
  monsters: BASEURL + 'monsters/',
  conditions: BASEURL + 'conditions/'
}

// HELPERS //

const parseJSON = res => {
  switch (res.status) {
    case 200: return res.json()
    case 404: return { error: "Unable to find resource" }
    default: throw new Error("Server unavailable")
  }
}

const parseIndex = index => index.toLowerCase().replace(/[()',]/g,"").replace(/ form/, "").replace(/[/ ]/g, '-')

const getResource = url => {
  return (index) => fetch(url + parseIndex(index)).then(parseJSON).catch(console.warn)
}

// FETCHES //

export const getEquipment = getResource(url.equipment)
export const getMagicItem = getResource(url.magicItems)
export const getSpell = getResource(url.spells)
export const getMonster = getResource(url.monsters)
export const getCondition = getResource(url.conditions)

export const getAllMonsters = () => fetch(url.monsters).then(parseJSON).catch(console.warn)
export const getAllSpells = () => fetch(url.spells).then(parseJSON).catch(console.warn)
