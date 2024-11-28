export interface ApplyFormModelBase {
    // 에어테이블 필드명
    fieldName: string;

    // 타이틀 (폼에 표시될 이름)
    title: string;

    // 설명 (폼에 표시될 설명)
    description?: string;

    hintText? : string;

    // 필수 여부
    required?: boolean;

    // 초기값
    initialValue?: string;
}

// 타입에 따른 폼 객체 정의
export interface TextFormModel extends ApplyFormModelBase {
    type: 'text';
    formObject: TextFormObject;
}

export interface LongTextFormModel extends ApplyFormModelBase {
    type: 'multi-line';
    formObject: LongTextFormObject;
}

export interface DropDownFormModel extends ApplyFormModelBase {
    type: 'drop-down';
    formObject: DropDownFormObject;
}

// ApplyFormModel 유니온 타입
export type ApplyFormModel = TextFormModel | LongTextFormModel | DropDownFormModel;

export interface TextFormObject {
    placeholder: string;
}

export interface LongTextFormObject {
    placeholder: string;
}

export interface DropDownFormObject {
    options: string[];
}

// 기본값 생성 함수
const defaultApplyFormModel: ApplyFormModel = {
    fieldName: '',
    title: '',
    required: false,
    type: 'text',
    formObject: {
        placeholder: '',
    },
};

// ApplyFormModel 생성 함수
export function createApplyFormModel<T extends ApplyFormModel>(
    form: Partial<T>
): T {
    const defaultForm = defaultApplyFormModel as T;
    return {
        ...defaultForm,
        ...form,
    };
}
