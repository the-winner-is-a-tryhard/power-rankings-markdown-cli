const capitalizeOnlyFirstLetter = word => {
  try {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  } catch {
    return undefined
  }
}

export { capitalizeOnlyFirstLetter }
