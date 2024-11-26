import {computed, type Reactive} from "vue";
import type {ProfitModel} from "~/types/profit";

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

    // 총합 계산
    const calculateTotalProfit = (profits: Reactive<ProfitModel>[]): ComputedRef<number> => {
        return computed(() => profits.reduce((acc, val) => acc + val.amount, 0))
    };

    const formatTotalProfit = (value: number): string => {
        if (value >= 100000000) {
            const 억단위 = Math.floor(value / 100000000);
            const 억이하 = value % 100000000;
            return `약 ${억단위}억 ${Math.round(억이하 / 10000)}만원`;
        } else if (value >= 100000) {
            return `약 ${(value / 10000).toFixed(0)}만원`;
        } else {
            return `${value.toLocaleString()}원`;
        }
    };

    return {
        calculateProfit,
        calculateTotalProfit,
        formatTotalProfit,
    };
};
