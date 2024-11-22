export const useProfitCalculator = (
    가격: Record<string, number>,
    회차: Record<string, number>,
    환자수: number,
) => {
    const calculateProfit= (key: string):number => {
        return 가격[key] * 회차[key] * 환자수;
    }

    const calculateTotalProfit = (가격: Record<string, number>):number => {
        return Object.values(가격).reduce((total,value) => total + value, 0);
    }

    const formatTotalProfit = (value: number) : string => {
        if (value >= 100000000) {
            const 억단위 = Math.floor(value / 100000000);
            const 억이하 = value % 100000000;
            return `약 ${억단위}억 ${Math.round(억이하 / 10000)}만원`;
        } else if (value >= 100000) {
            return `약 ${(value / 10000).toFixed(0)}만원`;
        } else {
            return `${value.toLocaleString()}원`;
        }
    }

    return {
        calculateProfit,
        calculateTotalProfit,
        formatTotalProfit,
    }
}