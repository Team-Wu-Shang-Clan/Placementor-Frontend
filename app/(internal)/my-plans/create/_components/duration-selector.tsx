import React from "react"
import { useFormContext } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { durationOptions } from "./create-plan-form-schema"

interface DurationSelectorProps {
  className?: string
}

export function DurationSelector({ className }: DurationSelectorProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name="durationDays"
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>Duration</FormLabel>
          <Select
            onValueChange={(value) => field.onChange(parseInt(value))}
            defaultValue={field.value?.toString()}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a duration" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {durationOptions.map((option) => (
                <SelectItem key={option.value} value={option.value.toString()}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
