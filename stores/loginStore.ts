import { create } from 'zustand';

interface LoginStore {
	phoneNumber: string,
	setPhoneNumber: (phoneNumber: string) => void,

	verificationCode: string,
	setVerificationCode: (verificationCode: string) => void,

	verificationCodeSent: boolean,
	setVerificationCodeSent: (verificationCodeSent: boolean) => void,

	isSigningUp: boolean,
	setIsSigningUp: (isSigningUp: boolean) => void,

	isLoaded: boolean,
	setIsLoaded: (isLoaded: boolean) => void,

	isVerified: boolean,
	setIsVerified: (isVerified: boolean) => void,
}

const useLoginStore = create<LoginStore>((set) => ({
	phoneNumber: '',
	setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),

	verificationCode: '',
	setVerificationCode: (verificationCode: string) => set({ verificationCode }),

	verificationCodeSent: false,
	setVerificationCodeSent: (verificationCodeSent: boolean) => set({ verificationCodeSent }),

	isSigningUp: false,
	setIsSigningUp: (isSigningUp: boolean) => set({ isSigningUp }),

	isLoaded: false,
	setIsLoaded: (isLoaded: boolean) => set({ isLoaded }),

	isVerified: false,
	setIsVerified: (isVerified: boolean) => set({ isVerified }),
}));

export default useLoginStore;
