"use client"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { loginSchema, LoginValues } from "./form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { setCookie } from "cookies-next"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useLoginMutation } from "@/services/auth/mutations"

export function LoginForm() {
    const router = useRouter()
    const { mutateAsync, isPending, error } = useLoginMutation()

    const form = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
    })

    async function onSubmit(data: LoginValues) {
        try {
            const response = await mutateAsync(data)
            console.log(response)
            const token = response.data.token
            if (!token) {
                toast.error("Error occured in login")
                return
            }
            console.log(token)
            setCookie('token', token);
            toast.success("Login Successful")
            router.replace("/dashboard")
        } catch (error_) {
            toast.success(error?.message || "Error in login")
            console.log(error_)
        }
    }


    return (
        <div className="grid gap-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                        placeholder="name@example.com"
                                        disabled={isPending}
                                        autoComplete="email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        disabled={isPending}
                                        autoComplete="current-password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign in
                    </Button>
                </form>
            </Form>
        </div>
    )

}