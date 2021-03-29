export default function useLocalStorageList(key) {

  const getItems = () =>  JSON.parse(localStorage.getItem(key))

  const setItems = value => localStorage.setItem(key, JSON.stringify(value))

  const clearItems = () => localStorage.removeItem(key)

  const addItem = item => {
    let locals = getItems() ? getItems().map(m => m.name === item.name ? item : m) : [item]
    if (!locals.find(m => m.name === item.name)) {
      locals = [...locals, item]
    }
    setItems(locals)
  }

  return [getItems, setItems, clearItems, addItem]

}
