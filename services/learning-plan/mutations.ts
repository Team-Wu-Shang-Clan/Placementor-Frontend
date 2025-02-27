import { useMutation } from "@tanstack/react-query"
import { createLearningPlan } from "./apis"

export const useCreateLearningPlanMutation = () => {
    return useMutation({
        mutationFn: createLearningPlan
    })
}