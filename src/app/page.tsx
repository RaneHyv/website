import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Progress } from "@/components/Progress";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { DiPhp } from "react-icons/di";
import { FaStar } from "react-icons/fa";
import { FaGolang, FaGraduationCap, FaPython } from "react-icons/fa6";
import { LiaJava } from "react-icons/lia";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";

import logoINTK from "@/images/logos/intk.svg";
import logoKamk from "@/images/logos/kamk.png";
import logoKao from "@/images/logos/kao.png";
import logoSommelo from "@/images/logos/sommelo.png";

interface Role {
  company: string;
  title: string;
  logo?: ImageProps["src"];
  href?: string;
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
  singleDate?: boolean;
}

interface Skill {
  name: React.ReactNode;
  title: string;
  value: number;
}

const ICONCLASS =
  "h-6 w-6 flex-none stroke-zinc-400 dark:stroke-zinc-500" as const;

const LIGHTICONCLASS =
  "h-6 w-6 flex-none stroke-zinc-500 dark:stroke-zinc-400" as const;

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon
        className={
          "h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 " +
          "dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        }
      />
    </Link>
  );
}

function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  const startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === "string" ? role.end : role.end.label;
  const endDate = typeof role.end === "string" ? role.end : role.end.dateTime;
  const singleDate = !!role.singleDate;
  const link = role.href ? role.href : undefined;

  return (
    <li className="flex gap-4">
      <div
        className={
          "relative mt-1 flex h-10 w-10 flex-none items-center " +
          "justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 " +
          "ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 " +
          "dark:ring-0"
        }
      >
        {role.logo && (
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        )}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd
          className={
            "w-full flex-none text-sm font-medium text-zinc-900 " +
            "dark:text-zinc-100 " +
            (link ? "hover:cursor-pointer hover:underline" : "")
          }
        >
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {role.company}
            </a>
          ) : (
            role.company
          )}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          {!singleDate ? <span aria-hidden="true">—</span> : null}{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Education() {
  let education: Array<Role> = [
    {
      company: "Kajaani University of Applied Sciences (KAMK)",
      title: `A training that specializes in device design and device-based programming.
        The main focus of the studies is on the design and implementation of
        intelligent systems electronics, telecommunications, databases and user interfaces.
        In education, the application areas of intelligent systems are e.g. well-being,
        exercise, games, smart environments and industry. An engineer who has graduated
        is an expert who is able to apply his or her skills in hardware and software design
        tasks in various fields, including the gaming industry.`,
      href: "https://www.kamk.fi/en",
      logo: logoKamk,
      start: "2018",
      end: "2023",
    },
    {
      company: "Kainuu Vocational College (KAO), Kajaani",
      title: `ICT technician is able to perform the installation, commissioning,
        programming, configuration and maintenance of computer and communication equipment.
        In addition, he is competent in testing, maintenance, repair and commissioning of
        electronic equipment.`,
      href: "https://www.kao.fi/",
      logo: logoKao,
      start: "2014",
      end: "2017",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FaGraduationCap className={ICONCLASS} />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: "INTK",
      title: `I have worked on various projects as a software engineer. Ranging
        from web development to task automation. For the most cases I have been
        responsible for the whole development process from start to finish.`,
      href: "https://www.intk.com/en",
      logo: logoINTK,
      start: "2022",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
      singleDate: false,
    },
    {
      company: "Kainuun Tietomikro Oy",
      title: `Kainuun Tietomikro Oy is a local computer shop in Kuhmo.
        I was worked on pc repair and maintenance at hardware and software/os level.
        Other responsibilitys I had were customer service, taking care of the shop,
        selling products and services.`,
      href: "https://www.tietomikro.com/",
      start: "2016",
      end: "June",
      singleDate: true,
    },
    {
      company: "Videokliniikka Ky",
      title: `Videokliniikka is a local electronic appliance repair shop in Kuhmo.
        I was responsible for diagnosing and repairing appliances that were brought
        in. Now and then I would handle customer support and help the owner as an
        assistant.`,
      href: "https://www.videoklinikka.net/",
      start: "2015",
      end: "June",
      singleDate: true,
    },
    {
      company: "Sommelo",
      title: `Sommelo is a yearly music event in Kuhmo. I was part of the support
        staff before the event. Doing the actual event I worked as part of the
        customer support team.`,
      logo: logoSommelo,
      href: "https://sommelo.net/en/",
      start: "2014",
      end: "June",
      singleDate: true,
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BsFillBriefcaseFill className={ICONCLASS} />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <a href="/rane-hyvonen-cv.pdf" download="rane-hyvonen-cv.pdf">
        <Button variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </a>
    </div>
  );
}

function Skills() {
  const skills: Skill[] = [
    {
      name: <RiJavascriptFill className={ICONCLASS} />,
      title: "JavaScript",
      value: 90,
    },
    {
      name: <BiLogoTypescript className={ICONCLASS} />,
      title: "TypeScript",
      value: 80,
    },
    {
      name: <FaPython className={ICONCLASS} />,
      title: "Python",
      value: 65,
    },
    {
      name: <TbBrandCpp className={LIGHTICONCLASS} />,
      title: "C/C++",
      value: 50,
    },
    {
      name: <FaGolang className={ICONCLASS} />,
      title: "Go",
      value: 45,
    },
    {
      name: <LiaJava className={LIGHTICONCLASS} />,
      title: "Java",
      value: 40,
    },
    {
      name: <DiPhp className={LIGHTICONCLASS} />,
      title: "PHP",
      value: 40,
    },
    {
      name: <TbBrandKotlin className={LIGHTICONCLASS} />,
      title: "Kotlin",
      value: 35,
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FaStar className={ICONCLASS} />
        <span className="ml-3">Skills</span>
      </h2>
      <ul className="mt-6 space-y-4">
        {skills.map((skill, skillIndex) => (
          <li key={skillIndex} className="flex items-center">
            <div
              className="flex-none w-14 text-zinc-500 dark:text-zinc-400"
              title={skill.title}
            >
              {skill.name}
            </div>
            <div className="flex-auto">
              <Progress value={skill.value} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function Home() {
  return (
    <>
      <Container className="mt-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software Engineer with a passion for automation and cutting-edge
            technology.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Rane, a software engineer passionate about technology,
            specializing in creating creative solutions for different needs and
            automating tasks to boost efficiency—because who doesn’t love
            getting more done by being a little lazy? In my spare time, I
            immerse myself in gaming, explore the latest tech advancements, and
            enjoy tinkering with computers & computer peripherals. I also find
            joy in music, from experimenting with music gear to listening to my
            favorite tunes both during my free time and while working. I believe
            in the power of technology to simplify our lives and enhance our
            experiences, and I’m committed to using technology to simplify life
            and enrich experiences, aiming to make a positive impact both
            professionally and personally.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/RaneHyv"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/ranehyvonen/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-12">
        <Skills />
      </Container>
      <Container className="mt-12">
        <div className="mx-auto grid  grid-cols-1 gap-x-10 gap-y-12 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10">
            <Education />
          </div>
          <div className="space-y-10">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
