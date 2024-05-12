import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import logoINTK from '@/images/logos/intk.svg'
import { FaGraduationCap } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";
// TODO: Add VSCode formatting settings file

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
  singleDate?: boolean
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime
  let singleDate = role.singleDate ? true : false

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
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
          <time dateTime={startDate}>{startLabel}</time>{' '}
          {!singleDate ? <span aria-hidden="true">—</span> : null}{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

// TODO: Replace Logos & clean SVGs
function Education() {
  let education: Array<Role> = [
    {
      company: 'Kajaani University of Applied Sciences (KAMK)',
      title: `A training that specializes in device design and device-based programming.
        The main focus of the studies is on the design and implementation of 
        intelligent systems electronics, telecommunications, databases and user interfaces. 
        In education, the application areas of intelligent systems are e.g. well-being, 
        exercise, games, smart environments and industry. An engineer who has graduated 
        is an expert who is able to apply his or her skills in hardware and software design 
        tasks in various fields, including the gaming industry.`,
      logo: logoPlanetaria,
      start: '2018',
      end: '2023',
    },
    {
      company: 'Kainuu Vocational College (KAO), Kajaani',
      title: `ICT technician is able to perform the installation, commissioning, 
        programming, configuration and maintenance of computer and communication equipment. 
        In addition, he is competent in testing, maintenance, repair and commissioning of 
        electronic equipment.`,
      logo: logoPlanetaria,
      start: '2014',
      end: '2017',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FaGraduationCap 
          className="w-6 h-6 flex-none stroke-zinc-400 dark:stroke-zinc-500"
        />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'INTK',
      title: `I have worked on various projects as a software engineer. Ranging 
        from web development to task automation. For the most cases I have been 
        responsible for the whole development process from start to finish.`,
      logo: logoINTK,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
      singleDate: false,

    },
    {
      company: 'Kainuun Tietomikro Oy',
      title: `Kainuun Tietomikro Oy is a local computer shop in Kuhmo. 
        I was worked on pc repair and maintenance at hardware and software/os level. 
        Other responsibilitys I had were customer service, taking care of the shop, 
        selling products and services.`,
      logo: logoAirbnb,
      start: '2016',
      end: 'June',
      singleDate: true,
    },
    {
      company: 'Videokliniikka Ky',
      title: `Videokliniikka is a local electronic appliance repair shop in Kuhmo. 
        I was responsible for diagnosing and repairing appliances that were brought 
        in. Now and then I would handle customer support and help the owner as an 
        assistant.`,
      logo: logoFacebook,
      start: '2015',
      end: 'June',
      singleDate: true,
    },
    {
      company: 'Sommelo',
      title: `Sommelo is a yearly music event in Kuhmo. I was part of the support 
        staff before the event. Doing the actual event I worked as part of the 
        customer support team.`,
      logo: logoStarbucks,
      start: '2014',
      end: 'June',
      singleDate: true,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BsFillBriefcaseFill 
          className="w-6 h-6 flex-none stroke-zinc-400 dark:stroke-zinc-500"
        />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          {/* TODO: Fix descriptions/texts */}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software engineer, tech enthusiast & music enjoyer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Rane, a software engineer from Utrecht. I enjoy exploring and
            learning about new technologies and hardware.
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
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-10 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="space-y-10">
            <Education />
          </div>
          <div className="space-y-10">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
