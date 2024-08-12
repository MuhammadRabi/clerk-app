export async function getProducts() {
  try {
    const res = await fetch(
      'https://66ab770d636a4840d7cac8c0.mockapi.io/products'
    )
    const data = res.json()
    return data
  } catch (error) {
    throw new Error('there is an error!')
  }
}
