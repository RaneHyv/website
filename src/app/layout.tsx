import { type Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";

const YearsAgo = new Date().getFullYear() - 2014;

export const metadata: Metadata = {
  title: {
    template: "%s - Rane Hyvönen",
    default: "Rane Hyvönen - Software engineer",
  },
  description: `I’m Rane, a software engineer from Kajaani. I enjoy
  exploring and learning about new technologies and hardware.
  My interest in software development started ${YearsAgo} years ago
  in Vocational College by learning very basic C/C++ with Borland.
  From that point onwards I slowly started to learn more languages and
  started to enjoy programming more and more. A combination of interests
  in hardware, smart solutions and programming led me to enroll at
  Kajaani University of Applied Sciences in the Intelligent Systems
  sector.Personally, I value attention to detail in any work. The phrase
  "Function over form" is quite close to my personal goals in software
  design. It is nice to have sites and software that looks pretty
  but it has to work for every device as intended. Otherwise,
  what is the point?`,
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
