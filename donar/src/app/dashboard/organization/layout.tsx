import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar" 
import { SiteHeader } from "@/components/site-header" 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
     <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <main className="w-full"> 
        {children} 
      </main>
      </SidebarInset>
    </SidebarProvider>
 
  )
}
