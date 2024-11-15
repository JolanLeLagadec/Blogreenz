import { Button } from '@/Components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form} from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { Select } from '@/Components/ui/select';
import { Textarea } from '@/Components/ui/textarea';
import React from 'react'
import { UseFormReturn } from 'react-hook-form';
import SelectForm from './Select';

interface Props {
    onSubmit: (values: {title: string, content: string, category: string}) => void,
    form: UseFormReturn<any>
}

export default function Formm({ onSubmit, form }: Props) {

    console.log(form)

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
                <Input className='w-3/4' placeholder="My first article" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Content</FormLabel>
            <FormControl>
              <Textarea className='h-fit w-3/4' placeholder="One day..." {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>
            <FormControl>
            <SelectForm field = {field}/>
            </FormControl>
            <FormDescription>
              Choose a category.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}
