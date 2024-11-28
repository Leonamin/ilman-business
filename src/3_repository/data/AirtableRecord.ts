export interface AirtableRecord {
    id?: string;
    fields: {
        의원명: string;
        지역명: string;
        문의자: string;
        전화번호: string;
        사용중인EMR: string;
        연락수단: string;
        기타: string;
    };
    createdTime?: string;
}