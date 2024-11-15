import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu'
import { router } from '@inertiajs/react'
import { LucideActivity, SettingsIcon } from 'lucide-react'
import React from 'react'

export default function DropDownMenu({ id }: { id: number }): JSX.Element {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger><SettingsIcon size={18} /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => {
        router.visit(`/dashboard/${id}/edit`)
    }}>Update</DropdownMenuItem>
    <DropdownMenuItem onClick={() => router.delete(`/dashboard/${id}/destroy`)}>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}

