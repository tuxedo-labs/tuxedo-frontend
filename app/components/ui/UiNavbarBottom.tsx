import { ListSideBar } from '../elements/List';
import { HomeIcons, PhotoIcons, PlusIcons, ProfileIcons, SettingIcons } from '../icons/Icons';
import NavbarBottom from '../layouts/NavbarBottom';

const sidebarItems = [
  {
    to: "/home",
    icon: (
      <HomeIcons />
    ),
    label: "Home",
  },
  {
    to: "/posts",
    icon: (
      <PhotoIcons />
    ),
    label: "Posts",
  },
  {
    to: "/new",
    icon: (
      <PlusIcons />
    ),
    label: "New",
  },
  {
    to: "/settings",
    icon: (
      <SettingIcons />
    ),
    label: "Settings",
  },
  {
    to: "/profile",
    icon: (
      <ProfileIcons />
    ),
    label: "Profile",
  },
];

// Define the UiNavbarBottom component
export default function UiNavbarBottom() {
  return (
    <NavbarBottom>
      {sidebarItems.map((item) => (
        <ListSideBar key={item.to} to={item.to} icon={item.icon} label={item.label} />
      ))}
    </NavbarBottom>
  );
}

