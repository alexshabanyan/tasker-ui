export interface UserDto {
  id: number,
  name: string,
  lastName: string,
  middleName?: string,
  login: string,
  email: string,
}

// ----- SPACE -----
export type SpaceModel = {
  id?: number,
  name?: string,
  userId?: number,
}

export type SpaceDto = {
  id: number,
  name: string,
  userId: number,
}