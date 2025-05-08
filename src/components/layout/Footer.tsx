import React from "react";

import Link from "next/link";

import { Book } from "lucide-react";

import '../../app/globals.css';

export const Footer = () => {
  return (
    <footer className="bg-background border-t py-8 md:py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Book className="h-6 w-6 text-edu-primary" />
            <span className="font-bold text-xl">EduEgypt</span>
          </Link>
          <p className="text-muted-foreground mb-4">
            Empowering Egyptian high school students with quality education.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="font-medium text-lg mb-4">Quick Links</h3>
          <div className="space-y-2">
            <Link href="/" className="block text-muted-foreground hover:text-foreground">Home</Link>
            <Link href="/auth/login" className="block text-muted-foreground hover:text-foreground">Login</Link>
            <Link href="/auth/register" className="block text-muted-foreground hover:text-foreground">Sign Up</Link>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="font-medium text-lg mb-4">Contact</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>Email: contact@eduegypt.com</p>
            <p>Phone: +20 123 456 789</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-foreground">
                Facebook
              </a>
              <a href="#" className="hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t">
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} EduEgypt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
