import { IRequestError } from "../interfaces";

export async function request<T>(url: string, config: RequestInit = {}): Promise<T> {
    const response = await fetch(url, config);
    if (response.status !== 200)
    {
        const error : IRequestError = await response.json()
        throw new Error(`${error.message}`)
    }
    return await response.json();
}