import { useAuth } from "~/middleware/auth"
import UiNavbarBottom from "~/components/ui/UiNavbarBottom";
import { Loading } from "~/components/elements/Loading";

export default function dashboard() {
  const { loading } = useAuth();
  if (loading) {
    return (
      <Loading />
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

