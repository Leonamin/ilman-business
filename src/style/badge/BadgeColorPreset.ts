export type BadgeColorPreset = 'red' | 'blue';

// 프리셋을 CSS 클래스 이름과 연결
export const badgeColorPresets: Record<BadgeColorPreset, string> = {
    red: 'badge-red',
    blue: 'badge-blue'
};

export type BadgeSizePreset = 'tiny';

export const badgeSizePresets: Record<BadgeSizePreset, string> = {
    tiny: 'badge-tiny'
};