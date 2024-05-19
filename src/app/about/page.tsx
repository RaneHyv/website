import { Container } from "@/components/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import portraitImage from "@/images/cover.jpg";
import clsx from "clsx";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const YearsAgo = new Date().getFullYear() - 2014;

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className={
          "group flex text-sm font-medium text-zinc-800 transition " +
          "hover:text-blue-700 dark:text-zinc-200 dark:hover:text-blue-700"
        }
      >
        <Icon
          className={
            "h-6 w-6 flex-none fill-zinc-500 transition " +
            "group-hover:fill-blue-700"
          }
        />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d={
          "M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 " +
          "2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 " +
          "0-.99-1.126L12 12.251 6.245 7.187Z"
        }
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "I’m Rane Hyvönen. I build projects and solutions for the web.",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Rane Hyvönen, a Tech Enthusiast and Problem Solver.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m Rane Hyvönen, a Tech Enthusiast and Problem Solver. As a
              software engineer, I&apos;m deeply invested in the world of
              technology, constantly seeking new ways to innovate and improve.
              My specialty lies in crafting ingenious solutions that address a
              variety of needs, whether it’s streamlining workflows or solving
              complex problems. Automation is my game – I love finding ways to
              make processes more efficient because who doesn&apos;t enjoy
              getting more done with less effort?
            </p>
            <p>
              When I&apos;m not knee-deep in code, you&apos;ll likely find me
              lost in the immersive worlds of gaming, exploring virtual
              landscapes, and conquering digital challenges. Gaming isn&apos;t
              just a hobby for me – it&apos;s a way to unwind and stay sharp.
              But it&apos;s not all about gaming. I&apos;m also deeply
              passionate about exploring the forefront of technology. I&apos;m
              always on the lookout for the latest gadgets and innovations. From
              the newest processors to the sleekest and most efficient laptops,
              I love diving into the specs and exploring what makes each device
              unique.
            </p>
            <p>
              In an unsurprising turn of events, I also have a thing when it
              comes to peripherals. Whether it&apos;s building custom rigs or
              exploring hardware to fit a need or squeeze out every last drop of
              performance, I&apos;m always up for a tinkering session. And of
              course, there&apos;s music – an integral part of my life, setting
              the tone for every moment. From experimenting with different audio
              setups to exploring playlists for every occasion, I find endless
              joy in the world of sound
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/RaneHyv"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/ranehyvonen/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:businessrhyv@outlook.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              businessrhyv@outlook.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
