import SideBar from "~/components/layouts/SideBar";
import ListSideBar from "~/components/elements/List";
import { useAuth } from "~/middleware/auth"
import UiNavbarBottom from "~/components/ui/UiNavbarBottom";

export default function dashboard() {
  const { loading } = useAuth();
  if (loading) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <>
      <div>
        <h1>hello world</h1>
        <UiNavbarBottom />
      </div>
    </>
  )
}

