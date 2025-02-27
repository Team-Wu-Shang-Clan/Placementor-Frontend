import { useMutation } from "@tanstack/react-query"
import { registerUser} from "./apis"

export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: registerUser
    })
}