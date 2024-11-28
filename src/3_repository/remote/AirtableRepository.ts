import axios from "axios";
import type {AirtableRecord} from "~/src/3_repository/data/AirtableRecord";

const AIRTABLE_BASE_URL = `https://api.airtable.com/v0/appdx5BXToJFqzDNx`;
const API_KEY = 'patp6EfNTb0wZNJcU.bb3647c8a2b73e10f401dc52be5ee27adf9a0ef75337993e0ad3ae7d5a4a8482';

const airtableApi = axios.create({
    baseURL: AIRTABLE_BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
    },
});

export class AirtableRepository {
    async createRecord(fields: AirtableRecord["fields"]): Promise<AirtableRecord> {
        try {
            const response = await airtableApi.post(`/tblkBqhxIFWD1DzdJ`, {fields});
            return response.data;
        } catch (error) {
            console.error("Repository Error: ", error.response?.data || error);
            throw error;
        }
    }
}
