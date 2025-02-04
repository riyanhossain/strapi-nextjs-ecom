"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DISTRICT } from "@/constants";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Invalid email address.",
    })
    .optional(),
  district: z.enum(DISTRICT as [string, ...string[]], {
    message: "Please select a district.",
  }),
  phone: z
    .string()
    .trim()
    .regex(
      /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/,
      "Invalid Bangladeshi phone number"
    ),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
  note: z.string().max(1000).optional(),
});

export function BillingForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      district: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-8"
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Full Name<span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Hossain" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Hossain" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>
                District<span className="text-red-600">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your district" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {DISTRICT.map((district) => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>
                Phone<span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="01712345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>
                Address<span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={2}
                  placeholder="Enter your full address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-2">
          <h2 className="font-semibold uppercase">Additional Information</h2>
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Order notes (optional)</FormLabel>
                <FormControl>
                  <Textarea rows={4} placeholder="Enter your note" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="uppercase col-span-2 text-xl"
          size="lg"
        >
          Place Order
        </Button>
      </form>
    </Form>
  );
}
