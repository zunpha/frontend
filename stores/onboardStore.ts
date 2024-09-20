import { create } from 'zustand';

interface OnboardStore {
	phoneNumber: string,
	setPhoneNumber: (phoneNumber: string) => void,

	verificationCode: string,
	setVerificationCode: (verificationCode: string) => void,

	verificationCodeSent: boolean,
	setVerificationCodeSent: (verificationCodeSent: boolean) => void,

	nickname: string,
	setNickname: (nickname: string) => void,

	isSigningUp: boolean,
	setIsSigningUp: (isSigningUp: boolean) => void,

	isLoaded: boolean,
	setIsLoaded: (isLoaded: boolean) => void,

	isVerified: boolean,
	setIsVerified: (isVerified: boolean) => void,
}

const useOnboardStore = create<OnboardStore>((set) => ({
	phoneNumber: '',
	setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),

	verificationCode: '',
	setVerificationCode: (verificationCode: string) => set({ verificationCode }),

	verificationCodeSent: false,
	setVerificationCodeSent: (verificationCodeSent: boolean) => set({ verificationCodeSent }),

	nickname: '',
	setNickname: (nickname: string) => set({ nickname }),

	isSigningUp: false,
	setIsSigningUp: (isSigningUp: boolean) => set({ isSigningUp }),

	isLoaded: false,
	setIsLoaded: (isLoaded: boolean) => set({ isLoaded }),

	isVerified: false,
	setIsVerified: (isVerified: boolean) => set({ isVerified }),
}));

export default useOnboardStore;
