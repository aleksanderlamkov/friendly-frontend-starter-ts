const getAttrNameFromSelector = (attrSelector: string) => {
  return attrSelector.substring(1, attrSelector.length - 1)
}

export default getAttrNameFromSelector
