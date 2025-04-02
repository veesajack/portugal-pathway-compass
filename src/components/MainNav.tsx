
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const MainNav = () => {
  const { user } = useAuth();

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-normal">Visas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to="/visas"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-portugal-blue/20 to-portugal-blue/40 p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-portugal-blue">
                      Explore All Visas
                    </div>
                    <p className="text-sm leading-tight text-foreground/80">
                      Find the right visa pathway for your journey to Portugal
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem to="/visas/d7" title="D7 Passive Income">
                For retirees and those with regular passive income
              </ListItem>
              <ListItem to="/visas/golden" title="Golden Visa">
                Investment-based residency program
              </ListItem>
              <ListItem to="/visas/digital-nomad" title="Digital Nomad">
                For remote workers and digital professionals
              </ListItem>
              <ListItem to="/visas/student" title="Student Visa">
                For international students enrolled in Portuguese education
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-normal">Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
              <ListItem to="/tools/eligibility-checker" title="Visa Eligibility Checker">
                Find the right visa type for your situation and goals
              </ListItem>
              <ListItem to="/tools/document-checklist" title="Document Checklist">
                Get a personalized list of required documents
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-normal">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
              <ListItem to="/resources/guides" title="Immigration Guides">
                Step-by-step guides to the immigration process
              </ListItem>
              <ListItem to="/resources/faq" title="FAQ">
                Answers to common questions about moving to Portugal
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/consultation">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-base font-normal")}>
              Consultation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-base font-normal")}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MainNav;
