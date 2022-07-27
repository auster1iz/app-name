import create from 'zustand'

export const useNavigationStore = create((set) => ({
    isHomeScreen: true,
    isCameraScreen: false,
    isUserProfileScreen: false,
    navigateToHomeScreen: () => set(() => ({ isHomeScreen: true, isCameraScreen: false, isUserProfileScreen: false })),
    navigateToCameraScreen: () => set(() => ({ isHomeScreen: false, isCameraScreen: true, isUserProfileScreen: false })),
    navigateToUserProfileScreen: () => set(() => ({ isHomeScreen: false, isCameraScreen: false, isUserProfileScreen: true })),
}))
