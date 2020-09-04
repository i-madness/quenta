export const ACTION_TYPES = {
  ENTRIES_LOADED: 'ENTRIES_LOADED',
  ENTRY_LOAD_ERR: 'ENTRY_LOAD_ERR',
  LOCALE_CHANGED: 'LOCALE_CHANGED'
}

// ***** Action creators *****
export const changeLocale = (locale) => ({
  type: ACTION_TYPES.LOCALE_CHANGED,
  payload: locale
})

export const saveEntries = (entries) => ({
  type: ACTION_TYPES.ENTRIES_LOADED,
  payload: entries
})

export const errorLoadingEntries = () => ({
  type: ACTION_TYPES.ENTRY_LOAD_ERR
})

// ***** API *****
const fetchCharacters = () => fetch('https://i-madness.github.io/api/characters/oc/ocs.json')

export const loadEntries = () => (dispatch) => {
  return fetchCharacters()
    .then((response) => response.json())
    .then((data) => dispatch(saveEntries(data)))
    .catch((error) => dispatch(errorLoadingEntries()))
}

