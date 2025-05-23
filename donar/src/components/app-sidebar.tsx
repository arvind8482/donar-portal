"use client"

import * as React from "react"
import {
  AppWindowIcon,
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  GiftIcon,
  HandCoinsIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "lucide-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard/organization",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Donors",
      url: "/dashboard/organization/donors",
      icon: HandCoinsIcon,
    },
    {
      title: "Gifts",
      url: "/dashboard/organization/gifts",
      icon: GiftIcon,
    },
    {
      title: "Compaign",
      url: "/dashboard/organization/compaign",
      icon: AppWindowIcon,
    },
    {
      title: "Product",
      url: "/dashboard/organization/product",
      icon: ShoppingBagIcon,
    },
     {
      title: "Users",
      url: "/dashboard/organization/users",
      icon: UsersIcon,
    },
      {
      title: "Settings",
      url: "/dashboard/organization/settings",
      icon: SettingsIcon,
    },
  ],
 
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-purple-800 hover:text-white"
            >
              <a href="#" >
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">DonationPe</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} /> 
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
