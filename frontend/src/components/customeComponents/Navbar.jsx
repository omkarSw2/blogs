import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-background border-b border-muted">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="lg:hidden block mr-2">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <FeatherIcon className="h-6 w-6 text-primary" />
          </SheetHeader>
          <SheetDescription>
            <Button
              variant="ghost"
              className=" flex flex-col gap-2 w-full justify-center items-center hover:text-primary text-2xl mt-4 ">
              omkar{" "}
            </Button>
            <Button
              variant="ghost"
              className=" flex flex-col gap-2 w-full justify-center items-center hover:text-primary text-2xl  mt-4">
              omkar{" "}
            </Button>
            <Button
              variant="ghost"
              className=" flex flex-col gap-2 w-full justify-center items-center hover:text-primary text-2xl  mt-4 ">
              omkar{" "}
            </Button>
            <Button
              variant="ghost"
              className=" flex flex-col gap-2 w-full justify-center items-center hover:text-primary text-2xl  mt-4 ">
              omkar{" "}
            </Button>
            <Button
              variant="ghost"
              className=" flex flex-col gap-2 w-full justify-center items-center hover:text-primary text-2xl  mt-4">
              omkar{" "}
            </Button>
          </SheetDescription>

          <SheetFooter className="sm:justify-center mt-5 ">
            <Button
              size="sm"
              variant="outline"
              className="hover:text-primary w-full">
              <LogOut />
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Link to="" className="mr-6 flex items-center">
        <FeatherIcon className="h-6 w-6 text-primary" />
        <span className="sr-only">Blog</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-4">
        <Link
          to="/blogs"
          className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          Blog&apos;s
        </Link>
        <Link
          to=""
          className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          New
        </Link>
        <Link
          to="/plans"
          className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          Pricing
        </Link>
      </nav>
      <div className="ml-auto flex gap-2">
        <NavLink to="/login">
          <Button variant="outline">Sign in</Button>
        </NavLink>
        <NavLink to="/sign-up">
          <Button>Sign Up</Button>
        </NavLink>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 md:mr-5">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Navbar;
function FeatherIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  );
}
