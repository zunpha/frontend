import { create } from 'zustand';

type Category = {
	name: string,
	checked: boolean,
}

interface CategoryStore {
	categories: Category[],
	setCategories: (categories: Category[]) => void,
}

const categoryList = [
	'냉장고', '에어컨/난방기기', '세탁기/건조기',
	'전자레인지/오븐', '청소기', '식기세척기',
	'정수기', '제습기', '텔레비전', '공기청정기',
	'스마트폰', '태블릿', '노트북', '데스크탑',
	'웨어러블 기기', '모바일 악세서리', '모니터',
	'키보드/마우스', '스피커/사운드바', 'VR',
	'스마트홈 기기', '빔프로젝터', '게임기',
	'액션캠/드론', 'DSLR/미러리스 카메라',
	'카메라 악세서리', '기타 전자기기',
];

const useCategoryStore = create<CategoryStore>((set) => ({
	categories: [
		...categoryList.map((name) => ({
			name,
			checked: false,
		})),
	],
	setCategories: (categories: Category[]) => set({ categories }),
}));

export default useCategoryStore;
