import Link from "next/link";
import React from "react";

const ExternalLink = ({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-4">
      <hr className="!w-full border-t-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-8 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/posts">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/leeerob">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
          <Link href="/profile">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Profile
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Dashboard
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
