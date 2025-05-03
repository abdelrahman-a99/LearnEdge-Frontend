'use client';

import { usePathname } from "next/navigation";
import { Menu, X, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

import React, { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();

  // Mock function for demo purposes
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Book className="h-6 w-6 text-edu-primary" />
            <span className="font-bold text-xl hidden md:inline-block">EduEgypt</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={`${pathname === '/' ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}`}>
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/dashboard/student" className={`${pathname?.startsWith('/dashboard') ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}`}>
                Dashboard
              </Link>
              <Link href="/profile/1" className={`${pathname?.startsWith('/profile') ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}`}>
                Profile
              </Link>
              <Button variant="outline" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className={`${pathname === '/auth/login' ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}`}>
                Login
              </Link>
              <Link href="/auth/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile navigation */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`py-2 ${pathname === '/' ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard/student"
                  className={`py-2 ${pathname?.startsWith('/dashboard') ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile/1"
                  className={`py-2 ${pathname?.startsWith('/profile') ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Button variant="outline" onClick={handleLogout} className="w-full">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className={`py-2 ${pathname === '/auth/login' ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};