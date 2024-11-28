import { ref, watch } from 'vue';

export function useDebounce(value, delay = 300) {
    const debouncedValue = ref(value.value);
    let timeout;

    watch(value, (newValue) => {
        clearTimeout(timeout); // 기존 타이머 제거
        timeout = setTimeout(() => {
            debouncedValue.value = newValue; // 일정 시간이 지난 후 값 업데이트
        }, delay);
    });

    return debouncedValue;
}
