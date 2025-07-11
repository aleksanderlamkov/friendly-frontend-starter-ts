const getIdFromTitle = (title: string) => {
  return title.toLocaleLowerCase().replaceAll(' ', '-')
}

export default getIdFromTitle
