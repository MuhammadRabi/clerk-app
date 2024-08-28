// user params
export type CreateUserParams = {
  clerkId: string
  email: string
  username: string
  firstName: string
  lastName: string
  photo: string
}
export type UpdateUserParams = {
  username: string
  firstName: string
  lastName: string
  photo: string
}

export interface Product {
  name: string
  price: number
  id: string
  desc: string
}

export interface cartItem extends Product {
  quantity: number
}
