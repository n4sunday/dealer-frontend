import create from 'zustand'

type ExampleStoreType = {
  count: number
  setCount: (data: number) => void
}

const initialStore = {
  count: 0,
}

const useExampleStore = create<ExampleStoreType>((set, get) => ({
  ...initialStore,
  setCount: (data) => set({ count: data }),
}))

export default useExampleStore
