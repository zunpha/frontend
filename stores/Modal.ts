// 모달 상태를 관리하는 Zustand store 생성
import {create} from "zustand";

interface ModalState {
	modals: { [id: string]: boolean };  // 모달 ID에 따른 상태
	openModal: (id: string) => void;    // 특정 모달 열기
	closeModal: (id: string) => void;   // 특정 모달 닫기
	isModalOpen: (id: string) => boolean;  // 특정 모달이 열려 있는지 확인
}

export const useModal = create<ModalState>((set, get) => ({
	modals: {},
	openModal: (id) => set((state) => ({modals: {...state.modals, [id]: true}})),
	closeModal: (id) => set((state) => ({modals: {...state.modals, [id]: false}})),
	isModalOpen: (id: string) => !!get().modals[id],
}));


// const { openModal, closeModal, isModalOpen } = useModal();