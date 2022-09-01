export interface IUser {
  id: number,
  login: string,
  pwd: string,
  name: string,
  email: string,
  refreshToken?: string
  avatar: string,
}

export interface IUserSecure {
  id: number,
  login: string,
  name: string,
  email: string,
  avatar: string
}