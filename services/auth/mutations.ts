import { useMutation } from "@tanstack/react-query"
import { login, registerUser } from "./apis"

export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: registerUser
    })
}

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: login
    })
}

