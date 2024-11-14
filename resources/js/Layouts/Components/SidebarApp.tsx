import { Sidebar, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/Components/ui/sidebar'
import { SidebarContent } from '@/Components/ui/sidebar'
import { Stats } from 'fs'
import { url } from 'inspector'
import { BookIcon, GitGraphIcon, Settings2, User2Icon } from 'lucide-react'
import { title } from 'process'

export default function SidebarApp({ currentUrl }: { currentUrl: string }): JSX.Element {

  const items = [
    {
      title: 'Articles',
      url: '/dashboard/articles',
      icon: () => <BookIcon />
     },
     {
    title: 'Stats',
    url: '/dashboard/stats',
    icon: () => <GitGraphIcon />
     },
     {

        title: 'Profile',
        url: '/dashboard/profile',
        icon: () => <User2Icon />

     },
     {

        title: 'Settings',
        url: '/dashboard/settings',
        icon: () => <Settings2 />

     }
    ]
  return (
    <Sidebar variant={'inset'}>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className='mt-8 gap-2'>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton  className={`${ currentUrl == item.url ? 'bg-emerald-200 hover:bg-emerald-100 transition-all' : ''}`} asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  )
}
