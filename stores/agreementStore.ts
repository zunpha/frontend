import { create } from 'zustand';

type Agreement = {
	checked: boolean,
	setChecked: () => void,
	text: string,
	required: boolean,
}

interface AgreementStore {
	entire: boolean,
	setEntire: (entire: boolean) => void,

	agreements: Agreement[],
	setAgreements: (agreements: Agreement[]) => void,

}

const useAgreementStore = create<AgreementStore>((set) => ({
	entire: false,
	setEntire: (entire: boolean) => {
		if (entire) {
			set((state) => ({
				agreements: state.agreements.map((agreement) => ({
					...agreement,
					checked: true,
				})),
			}));
		} else {
			set((state) => ({
				agreements: state.agreements.map((agreement) => ({
					...agreement,
					checked: false,
				})),
			}));
		}

		set({ entire });
	},

	agreements: [
		{
			checked: false,
			setChecked: () => {
			},
			text: '개인 정보 수집 및 이용 동의',
			required: true,
		},
		{
			checked: false,
			setChecked: () => {
			},
			text: '이용 약관 동의',
			required: true,
		},
		{
			checked: false,
			setChecked: () => {
			},
			text: '광고성 정보 수신 동의',
			required: false,
		},
		{
			checked: false,
			setChecked: () => {
			},
			text: '위치 기반 서비스 이용 동의',
			required: false,
		},
	],

	setAgreements: (agreements: Agreement[]) => {
		set({ entire: agreements.every((agreement) => agreement.checked) });
		set({ agreements });
	},
}));

export default useAgreementStore;
