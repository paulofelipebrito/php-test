/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

class HttpClient {
    baseURL?: string;

    constructor(baseURL: string = '') {
        this.baseURL = baseURL;
    }

    get(path: string, options: any) {
        return this.makeRequest(path, {
            method: 'GET',
            headers: options?.headers,
            params: options?.params,
            responseType: options?.responseType
        });
    }

    post(path: string, options: any) {
        return this.makeRequest(path, {
            method: 'post',
            body: options?.body,
            headers: options?.headers,
            params: options?.params,
            responseType: options?.responseType
        });
    }

    put(path: string, options: any) {
        return this.makeRequest(path, {
            method: 'put',
            body: options?.body,
            headers: options?.headers,
            params: options?.params,
        });
    }

    patch(path: string, options: any) {
        return this.makeRequest(path, {
            method: 'patch',
            body: options?.body,
            headers: options?.headers,
            params: options?.params,
        });
    }

    delete(path: string, options: any) {
        return this.makeRequest(path, {
            method: 'delete',
            headers: options?.headers,
            params: options?.params,
        });
    }

    async makeRequest(path: string, options: any) {
        const params = new URLSearchParams();

        if (options.params) {
            Object.keys(options.params).forEach((param) => {
                if ((options.params[param] !== null && options.params[param] !== undefined) && Array.isArray(options.params[param])) {
                    Object.values(options.params[param]).forEach((el: any) => params.append(param, el?.toString()))
                }

                if ((options.params[param] !== null && options.params[param] !== undefined) && !Array.isArray(options.params[param])) {
                    params.append(param, options.params[param]);
                }
            });
        }

        const response = await axios({
            url: `${this.baseURL}${path}`,
            params: params,
            method: options.method,
            data: options.body,
        });

        if (response.status === 200) {
            return response.data;
        }

        return response;
    }

}

export default HttpClient;
