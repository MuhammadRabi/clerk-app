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

export type ProductToBuyParams = {
  name: string
  price: number
  buyerId: string
  desc?: string
}

export type ProductProps = {
  name: string
  price: number
  id: string
  desc: string
}
