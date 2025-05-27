export interface NewUserProp {
  id?: string
  name: string
  password: string
}

export type TUser = NonEmptyString<string>

type NonEmptyString<T extends string> = T extends '' ? never : T //user can't be empty
