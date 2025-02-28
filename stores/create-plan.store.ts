import { create } from "zustand"

interface PlanStore {
    isCreating: boolean
    error: string | null
    createdPlanId: string | null
    resetState: () => void
}

export const usePlanStore = create<PlanStore>((set) => ({
    isCreating: false,
    error: null,
    createdPlanId: null,
    resetState: () => {
        set({ isCreating: false, error: null, createdPlanId: null })
    }
}))