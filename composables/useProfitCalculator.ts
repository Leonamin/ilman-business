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
            const 수익 = 가격 * 회차 * Math.round(환자수.value);
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
        if (value >= 100000000) {
            const 억단위 = Math.floor(value / 100000000);
            const 억이하 = value % 100000000;
            return `${억단위}억 ${Math.round(억이하 / 10000)}만원`;
        } else if (value >= 100000) {
            return `${(value / 10000).toFixed(0)}만원`;
        } else {
            return `${value.toLocaleString()}원`;
        }
    };

    return {
        calculateProfit,
        calculateDiff,
        calculateTotalProfit,
        formatTotalProfit: formatTo만원단위,
    };
};
