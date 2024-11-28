
// 사용할 때는 뷰측에서 fieldName으로 된 반응형 변수 이름을 가진 객체 생성하도록 함
export interface ApplyFormModel {
    // 에어테이블 필드명
    fieldName: string;

    // 타이틀 (폼에 표시될 이름)
    title: string;

    // 설명 (폼에 표시될 설명)
    description?: string;

    // 필수 여부
    required?: boolean;

    // 입력 타입
    type: 'text' | 'long-text' | 'drop-down';

    // 입력 타입에 따른 추가 정보
    formObject: TextFormObject | LongTextFormObject | DropDownFormObject;
}

const defaultApplyFormModel: ApplyFormModel = {
    fieldName: '',
    title: '',
    description: '',
    required: false,
    type: 'text',
    formObject: {
        placeholder: '',
    },
}

export function createApplyFormModel(form: Partial<ApplyFormModel>): ApplyFormModel {
    return {
        ...defaultApplyFormModel,
        ...form,
    };
}

export interface TextFormObject {
    placeholder: string;
}

export interface LongTextFormObject {
    placeholder: string;
}

export interface DropDownFormObject {
    options: string[];
}