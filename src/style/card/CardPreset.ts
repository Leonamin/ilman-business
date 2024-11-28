export type CardPreset = 'white' | 'green' | 'blue' | 'yellow' | 'red';

// 프리셋을 CSS 클래스 이름과 연결
export const cardPresets: Record<CardPreset, string> = {
    white: 'card-white',
    green: 'card-green',
    blue: 'card-blue',
    yellow: 'card-yellow',
    red: 'card-red',
};