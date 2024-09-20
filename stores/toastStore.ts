import { create } from 'zustand';

interface Toast {
	id: string;  // 고유 ID
	text: string;
	duration: number;  // 표시될 시간 (ms 단위)
}

interface ToastStore {
	toasts: Toast[];
	addToast: (text: string, duration: number) => void;
	removeToast: (id: string) => void;
}

const useToastStore = create<ToastStore>((set) => ({
	toasts: [],

	addToast: (text: string, duration: number) => {
		const id = Date.now().toString();  // 고유 ID 생성
		const newToast: Toast = { id, text, duration };

		set((state) => ({
			toasts: [ ...state.toasts, newToast ],
		}));

		// 일정 시간 후 해당 토스트 삭제
		setTimeout(() => {
			set((state) => ({
				toasts: state.toasts.filter((toast) => toast.id !== id),
			}));
		}, duration + 300);
	},

	removeToast: (id: string) => {
		set((state) => ({
			toasts: state.toasts.filter((toast) => toast.id !== id),
		}));
	},
}));

export default useToastStore;
