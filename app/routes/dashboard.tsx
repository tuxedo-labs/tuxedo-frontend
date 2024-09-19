import SidebarLayout from '~/components/layouts/SidebarLayout'

export default function DashboardLayout({ children }: any) {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  )
}

