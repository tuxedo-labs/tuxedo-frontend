import { SidebarType } from '~/types/layouts/Sidebar';
import { ListSideBar } from '../elements/List';
import { HomeIcon, PhotoIcon } from '@heroicons/react/16/solid';
import { AdjustmentsVerticalIcon } from '@heroicons/react/20/solid';
import { useAuth } from '~/lib/auth';

export default function SidebarLayout({ children }: SidebarType) {
  const { role, isAuthenticated } = useAuth();

  return (
    <div className="flex">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <ListSideBar to='/' label='Dashboard' icon={<HomeIcon />} />

            {isAuthenticated && (
              <>
                {role === "admin" && (
                  <ListSideBar to='/dashboard/admin' label='Admin' icon={<AdjustmentsVerticalIcon />} />
                )}
                {role === "member" && (
                  <ListSideBar to='/new/posts' label='Posts' icon={<PhotoIcon />} />
                )}
              </>
            )}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        {children}
      </div>
    </div>
  );
}

