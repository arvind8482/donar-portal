 "use client"
import * as React from "react"
 import Image from 'next/image' 
import { toast } from "sonner"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


// 1. Define validation schema
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  password: z.string().min(1, 'Password is required'),
})

// 2. Define form types
type FormValues = z.infer<typeof formSchema>

function Login() {

    const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      password: '',
    },
  })

  const onSubmit = (data: FormValues) => {
      if (data.name && data.password) {
          toast.success(`Welcome, ${data.name}!`, {
            description: "You have successfully logged in.",
          }) 
        }   
  }
  return (
    <>
    <div className="h-screen flex  items-center justify-center bg-gradient-to-r from-[#DA4F46] to-[#F0AB50] drop-shadow-indigo-500/50">
             <Card className="w-full xl:w-[350px] mx-auto">
      <CardHeader className="text-center">
          <Image
            src="/images/portal-logo.png"  // Public folder image
            alt="portal logo" title="portal logo" className="mx-auto"
            width={140}
            height={140}
          /> 
        <CardTitle>User Login</CardTitle>
        <CardDescription>Please enter your details to connect our portal</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}  >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="pt-3x`">
              <FormLabel className="text-lg ">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-4 w-full p-3 cursor-pointer bg-gradient-to-r from-[#DA4F46] to-[#F0AB50] drop-shadow-indigo-500/50 hover:from-[#F0AB50] hover:to-[#DA4F46]">Submit</Button>
      </form>
    </Form>
      </CardContent>
      <CardFooter > </CardFooter>
    </Card>
    </div> 
    </>
  )
}

export default Login
