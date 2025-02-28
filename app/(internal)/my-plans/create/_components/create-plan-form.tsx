"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { TrackSelector } from "./track-selector"
import { DurationSelector } from "./duration-selector"
import { SkillLevelQuestion } from "./skill-level-question"
import { CreatePlanFormValues, createPlanSchema, skillQuestions } from "./create-plan-form-schema"
import { usePlanStore } from "@/stores/create-plan.store"
import { useCreateLearningPlanMutation } from "@/services/learning-plan/mutations"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function CreatePlanForm() {
  const router = useRouter()
  const { error, isPending, mutateAsync } = useCreateLearningPlanMutation()
  const { createdPlanId } = usePlanStore()

  const form = useForm<CreatePlanFormValues>({
    resolver: zodResolver(createPlanSchema),
    defaultValues: {
      track: "",
      durationDays: undefined,
      skillLevels: {},
    },
  })

  async function onSubmit(data: CreatePlanFormValues) {
    try {
      const response = await mutateAsync({
        durationDays: data.durationDays,
        track: "GENERIC"
      })
      const id = response.data.learningPlan.id
      console.log(id)
      console.log(response)
      toast.success("Plan created successfully!")
      router.push(`/my-plans/${id}`)
    } catch (error_) {
      console.log(error_)
      toast.error(error?.message ?? "Something went wrong. Please try again.")

    }

  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create Your Learning Plan</CardTitle>
            <CardDescription>
              Customize a plan that will help you prepare for your career goals.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Track Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Choose your target track</h3>
              <TrackSelector />
            </div>

            {/* Duration Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">How long do you want to prepare?</h3>
              <DurationSelector className="max-w-xs" />
            </div>

            {/* Skill Assessment */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Assess your current skill levels</h3>
              <p className="text-sm text-muted-foreground">
                Rate your proficiency in each area from 0 (beginner) to 10 (expert).
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {skillQuestions.map((skillInfo) => (
                  <SkillLevelQuestion key={skillInfo.id} question={skillInfo.question} />
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error?.message}</AlertDescription>
              </Alert>
            )}

            {createdPlanId && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full"
              >
                <Alert className="bg-green-50 text-green-800 border-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your learning plan has been created. You&apos;ll be redirected shortly...
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}

            <div className="flex w-full justify-end">
              <Button type="submit" size="lg" disabled={isPending

                
              }>
                {isPending ? "Creating your plan..." : "Create Plan"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}