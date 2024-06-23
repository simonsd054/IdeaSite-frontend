import { Link } from "react-router-dom"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navbarItems = [
  {
    content: "Home",
    linkTo: "/",
  },
  {
    content: "Create Idea",
    linkTo: "/ideas/create",
  },
]

export default function Navbar() {
  return (
    <NavigationMenu className="bg-slate-200 max-w-full justify-between p-3">
      <NavigationMenuList className="flex gap-5">
        <NavigationMenuItem>
          <Link to="/" className="text-slate-800 text-lg hover:text-slate-600">
            Logo
          </Link>
        </NavigationMenuItem>
        {navbarItems.map((item) => (
          <NavigationMenuItem key={item.content}>
            <Link
              to={item.linkTo}
              className="text-slate-800 text-lg hover:text-slate-600"
            >
              {item.content}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar className="cursor-pointer">
            <AvatarImage src="<avatar-image-link>" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </NavigationMenu>
  )
}
