import { useQuery } from "@tanstack/react-query"
import { getLearningPlan } from "./apis"

export const useGetLearningPlanQuery = ({ id }: { id: string }) => {
    return useQuery({
        queryKey: ["learning-plan", { id }],
        queryFn: () => getLearningPlan(id),
        enabled: !!id

    })
}