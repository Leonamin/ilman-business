import {computed, type Reactive} from "vue";
import type {ProfitModel} from "~/types/profit";

export const useProfitCalculator = (
    가격: Record<string, number>,
    회차: Ref<Record<string, number>>,
    환자수: Ref<number>,
) => {
    // 수익 계산
    const calculateProfit = (key: string): ComputedRef<number> => {
        return computed(() => {
            return 가격[key] * 회차.value[key] * Math.round(환자수.value);
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
