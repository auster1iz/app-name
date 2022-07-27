import create from 'zustand'

export const usePhotoStore = create((set) => ({
    photo: null,
    setPhoto: (newPhoto) => set(() => ({ photo: newPhoto })),
}))
