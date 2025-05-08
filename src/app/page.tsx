import Link from "next/link";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import { BookOpen, Users, Award } from "lucide-react";

// import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-edu-primary to-edu-accent py-16 md:py-24 text-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              The Future of Learning for Egyptian High Schools
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Access quality education, interactive lessons, and personalized
              learning paths for high school students across Egypt.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="default" className="bg-foreground text-background hover:bg-foreground/90" asChild>
                <Link href="/auth/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Designed for Modern Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg bg-card">
                <div className="w-12 h-12 bg-edu-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-edu-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Content</h3>
                <p className="text-muted-foreground">
                  Engage with video lessons, quizzes, and interactive exercises
                  designed specifically for the Egyptian curriculum.
                </p>
              </div>

              <div className="p-6 border rounded-lg bg-card">
                <div className="w-12 h-12 bg-edu-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-edu-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teacher Support</h3>
                <p className="text-muted-foreground">
                  Teachers can create courses, manage students, and track
                  progress efficiently with our intuitive tools.
                </p>
              </div>

              <div className="p-6 border rounded-lg bg-card">
                <div className="w-12 h-12 bg-edu-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-edu-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                <p className="text-muted-foreground">
                  Students can monitor their progress, identify strengths and
                  weaknesses, and focus on areas that need improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-background text-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-muted-foreground">
                  Create an account as a student or teacher to get started.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-background text-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Access Content</h3>
                <p className="text-muted-foreground">
                  Browse courses by grade level or subject and start learning.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-background text-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Learn & Progress</h3>
                <p className="text-muted-foreground">
                  Complete lessons, take quizzes, and track your improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-edu-primary to-edu-accent text-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
              Join thousands of students and teachers across Egypt who are
              already using our platform to enhance their educational journey.
            </p>
            <Button size="lg" variant="default" className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <Link href="/auth/register">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
