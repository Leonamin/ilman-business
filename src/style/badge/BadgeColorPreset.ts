export type BadgeColorPreset = 'red';

// 프리셋을 CSS 클래스 이름과 연결
export const badgeColorPresets: Record<BadgeColorPreset, string> = {
    red: 'badge-red'
};

export type BadgeSizePreset = 'tiny';

export const badgeSizePresets: Record<BadgeSizePreset, string> = {
    tiny: 'badge-tiny'
};