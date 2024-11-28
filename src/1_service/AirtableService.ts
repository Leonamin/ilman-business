import {AirtableRepository} from "~/src/3_repository/remote/AirtableRepository";
import type {AirtableRecord} from "~/src/3_repository/data/AirtableRecord";

export class FormService {
    private airtableRepository: AirtableRepository;

    constructor() {
        this.airtableRepository = new AirtableRepository();
    }

    async submitFormData(
        formData: AirtableRecord["fields"]
    ): Promise<AirtableRecord> {
        try {
            // Repository를 호출하여 데이터 저장
            const record = await this.airtableRepository.createRecord(formData);
            return record;
        } catch (error) {
            console.error("Service Error: ", error);
            throw error;
        }
    }
}
