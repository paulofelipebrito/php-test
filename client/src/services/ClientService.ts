/* eslint-disable @typescript-eslint/no-unused-vars */
import HttpClient from './utils/HttpClient';

interface FilterParams {
    size: number;
    page: number;
    cpf?: string;
    name?: string;
    gender?: string;
    birthday?: Date | null;
    state?: string;
    city?: string;
    address?: string;
  }

class ClientService {
    httpClient: HttpClient;
    baseURL?: string = import.meta.env.VITE_API_URL;

    constructor() {
        this.httpClient = new HttpClient(this.baseURL);
    }

    getClients() {
        return this.httpClient.get("/client", {});
    }
    
    getFilteredClients(params: FilterParams) {
        const filteredParams = Object.fromEntries(
            Object.entries(params).filter(([_, value]) => value !== null && value !== '')
          );
        return this.httpClient.get("/client/filter", { params: filteredParams });
    }
    
    addClient(cpf: string, name: string, gender: string, birthday: Date, state: string, city: string, address: string) {
        return this.httpClient.post("/client", { body: {
          cpf,
          name,
          gender,
          birthday: birthday,
          state,
          city,
          address
        } });
    }
    
    changeClient(id: number, cpf?: string, name?: string, gender?: string, birthday?: Date, state?: string, city?: string, address?: string) {
        return this.httpClient.put(`/client/${id}`, { body: {
          cpf,
          name,
          gender,
          birthday: birthday,
          state,
          city,
          address
        } });
    }
    
    deleteClient(id: number) {
        return this.httpClient.delete(`/client/${id}`, { });
    }
}

export default new ClientService();
