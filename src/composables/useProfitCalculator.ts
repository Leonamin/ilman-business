import {computed} from "vue";

export const useProfitCalculator = (
    환자수: Ref<number>,
) => {
    // 수익 계산
    const calculateProfit = (
        가격: number,
        회차: number,
    ): ComputedRef<number> => {
        return computed(() => {
            const 수익 = 가격 * 회차 * 환자수.value;
            return 수익;
        });
    };

    const calculateDiff = (
        아임파인수익: ComputedRef<number>,
        그냥수익: ComputedRef<number>,
    ): ComputedRef<number> => {
        return computed(() => {
            return 아임파인수익.value - 그냥수익.value;
        });
    }

    // 총합 계산
    const calculateTotalProfit = (profits: Object): ComputedRef<number> => {
        return computed(() => Object.values(profits).reduce((acc, cur) => acc + cur.value, 0));
    };

    const formatTo만원단위 = (value: number): string => {
        const 억 = 100000000;
        const 만 = 10000;

        if (value >= 억) {
            const 억단위 = Math.floor(value / 억);
            const 나머지만원 = Math.round((value % 억) / 만);
            return `${억단위}억 ${나머지만원.toLocaleString()}만원`;
        }

        if (value >= 만) {
            const 만단위 = Math.round(value / 만);
            return `${만단위.toLocaleString()}만원`;
        }

        return `${value.toLocaleString()}원`;
    };


    return {
        calculateProfit,
        calculateDiff,
        calculateTotalProfit,
        formatTotalProfit: formatTo만원단위,
    };
};
