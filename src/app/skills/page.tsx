import { SimpleLayout } from "@/components/SimpleLayout";
import { Tool } from "@/helpers/tools/tool-helper";
import { ToolsSection } from "@/helpers/tools/tool-selection-helper";

export const metadata = {
  title: "Skills",
  description: "Skills and experience gained over the years.",
};

export default function Skills() {
  return (
    <SimpleLayout title="Skills and experience gained over the years." intro="">
      <div className="space-y-20">
        <ToolsSection title="INTK">
          <Tool title="Typescript & Javascrip">
            Typescript and Javascript have been used for most of the projects
            that I have worked on over at the INTK. Including&nbsp;
            <a href="https://www.culturetoday.com" className="hover:underline">
              CultureToday
            </a>
            , companys internal CRM system and other tools and this website.
          </Tool>
          <Tool title="Social media APIs">
            Successfully integrated Meta, Google, and Google ADS APIs to develop
            robust tools aiding clients and internal teams in the seamless
            management and automation of social media accounts and
            advertisements.
          </Tool>
          <Tool title="GitHub">
            Demonstrated adeptness in utilizing GitHub for version control and
            collaborative development across all projects at INTK, as well as
            for personal endeavors.
          </Tool>
          <Tool title="AWS">
            Leveraged AWS services for efficient hosting and management of
            projects within the INTK ecosystem.
          </Tool>
          <Tool title="Postgres">
            Demonstrated proficiency in utilizing PostgreSQL as the primary
            database solution for most projects at INTK, contributing to robust
            data management and system reliability.
          </Tool>
          <Tool title="React & Vue">
            Used in developing user interfaces using React and Vue, ensuring
            seamless user experiences across all web projects.
          </Tool>
          <Tool title="Node.js">
            Leveraged Node.js for backend development & API integration for
            internal CRM project.
          </Tool>
          <Tool title="Docker">
            Utilized Docker for containerization and deployment of applications
            across various projects at INTK.
          </Tool>
          <Tool title="Uno / Tailwind / CSS">
            Tailwind & Uno CSS for styling and designing web projects, ensuring
            consistent and responsive design.
          </Tool>
          <Tool title="Basic devops">
            Basic DevOps tasks like setting up CI/CD pipelines, managing
            servers, and deploying applications.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Kajaani University of Applied Sciences">
          <Tool title="C / C++">
            C/C++ was used for learning the basics of programming and utilized
            for projects. These were mostly embedded & IOT systems projects.
            These included QT-Creator projects as well.
          </Tool>
          <Tool title="Python">
            Python was part of the curriculum and used for some projects and
            scripts/automation.
          </Tool>
          <Tool title="Java & Kotlin">
            Java and Kotlin were used for Android development projects.
          </Tool>
          <Tool title="Linux & RT-Linux">
            Used Linux as the primary OS for deployment server and development
            and RT-Linux for real-time systems projects.
          </Tool>
          <Tool title="PHP">
            Not really too familiar with PHP, but I have used it for few
            courses.
          </Tool>
          <Tool title="SCRUM & Agile development">
            SCRUM and Agile development methodologies were teached and practised
            in a project environment.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Kainuu Vocational College (KAO), Kajaani">
          <Tool title="Basic of electricity">
            Learned the basics of electricity and how to work with it safely.
            Experience in both mains electricity and low voltage systems.
          </Tool>
          <Tool title="Networks">
            Acquired foundational knowledge in networking and how networks work
            and how to structure them.
          </Tool>
          <Tool title="Electrnic design">
            Basics of electronic design and how to design, program and build
            simple electronic circuits and applications.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Kainuun Tietomikro Oy">
          <Tool title="Computer repair">
            Main task of the job were to analyze & repair computers and laptops.
          </Tool>
          <Tool title="Software installation">
            Installation of software and operating systems to computers and
            laptops.
          </Tool>
          <Tool title="Customer service">
            Basiuc customer service tasks like answering phones, helping
            customers in the store and taking in repair requests.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Videokliniikka Ky">
          <Tool title="Electronic analysis & repair">
            Analyzing and repairing electronic devices like TVs, DVD-players and
            other devices.
          </Tool>
          <Tool title="Customer service">
            Basic customer service tasks like answering phones, helping
            customers in the store and taking in repair requests.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Sommelo">
          <Tool title="Customer service">
            Basic customer service tasks like directing & helping customers.
          </Tool>
          <Tool title="Event organizing">
            Being part of the team that sets up the Sommelo festival.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
