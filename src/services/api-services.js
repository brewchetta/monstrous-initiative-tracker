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

const parseJSON = res => res.json()

const getResource = url => {
  return (index) => fetch(url + index).then(parseJson)
}

// FETCHES //

export const getEquipment = getResource(url.equipment)
export const getMagicItem = getResource(url.magicItems)
export const getSpell = getResource(url.spells)
export const getMonsters = getResource(url.monsters)
export const getConditions = getResource(url.conditions)
