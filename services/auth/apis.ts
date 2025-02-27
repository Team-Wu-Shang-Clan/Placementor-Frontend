import { api } from "@/lib/axios"

export const registerUser = async (data: { email: string, password: string, firstName: string, lastName: string }) => {
    return (await api.post("/auth/register", data)).data
}