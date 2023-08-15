export const useBaseFetch = async (path:string) => {
    return await useFetch(() => `http://127.0.0.1:8000${path}`)
  }