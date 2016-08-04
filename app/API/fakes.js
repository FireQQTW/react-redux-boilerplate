export const fakeApi = {
  getFake: async () => {
    return await fetch('http://jsonplaceholder.typicode.com/posts/1')
                 .then((res) => res.json())
  },
  getFake2: async () => {
    return await fetch('http://jsonplaceholder.typicode.com/posts/2')
                 .then((res) => res.json())
  }
}
