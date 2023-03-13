import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  HomeIcon,
  MenuAlt2Icon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Orders", href: "/orders", icon: ClockIcon },
  { name: "Products", href: "/products", icon: CogIcon },
  { name: "Customers", href: "/customers", icon: UserCircleIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-gray-800 md:w-64">
      {({ open }) => (
        <>
          <div className="px-2 py-4 space-y-1 h-screen">
            <div className="flex items-center justify-between px-2">
              <Link href="/" className="text-white text-2xl font-bold">
               Store Name
              </Link>
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt2Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <Disclosure.Panel className="mt-2" static>
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      router.pathname === item.href
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        router.pathname === item.href
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
