export interface Player {
  id: number
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAuthor: number
  position: string
}
export interface Gift {
  id: number
  url: string
  author_id: number
}
export interface AllPlayers {
  count: number
  items: Player[]
}
export interface Option {
  label: string
  value: string
}
