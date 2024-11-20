export type ButtonPreset = 'primary' | 'primaryOutline' | 'secondary';

// 프리셋을 CSS 클래스 이름과 연결
export const buttonClassMap: Record<ButtonPreset, string> = {
    primary: 'button-primary',
    primaryOutline: 'button-primary-outline',
    secondary: 'button-secondary'
};