import { fetchProjects } from "@/lib/api/projectAPI"
import { fetchSkills } from "@/lib/api/skillAPI"
import Skill from "@/types/skill.type"
import Image from "next/image"
import { formatProjectMonthYear } from "@/lib/utils"
import Link from "next/link"

export default async function Introduction() {
  const [skills, projects] = await Promise.all([fetchSkills(), fetchProjects()])

  const skillsByCategory = skills.reduce((groups, skill) => {
    const category = skill.category?.trim() || "Others"

    if (!groups.has(category)) {
      groups.set(category, [])
    }

    groups.get(category)?.push(skill)
    return groups
  }, new Map<string, Skill[]>())

  return (
    <section
      id="introduction"
      className="mx-auto w-full max-w-7xl px-4 py-20 pb-20 sm:px-6 lg:px-10"
    >
      <div className="grid gap-8">
        <article className="rounded-3xl border border-sky-100/80 bg-white/70 p-6 shadow-lg shadow-sky-100/60 backdrop-blur-sm sm:p-8 dark:border-sky-900/60 dark:bg-slate-900/50 dark:shadow-sky-950/30">
          <p className="text-sm font-semibold tracking-[0.16em] text-sky-700 uppercase dark:text-sky-300">
            Introduction
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Building software with clean structure and practical impact.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            My name is Pham Tuan Vu, a recent Software Engineering graduate.
            With a solid technical foundation and a strong passion for
            development, I am eager to join a dynamic tech environment where I
            can continuously learn, refine my skills, and contribute to building
            products that deliver real-world value.
          </p>
        </article>

        <article
          id="skills"
          className="rounded-3xl border border-sky-100/80 bg-white/70 p-6 shadow-lg shadow-sky-100/60 backdrop-blur-sm sm:p-8 dark:border-sky-900/60 dark:bg-slate-900/50 dark:shadow-sky-950/30"
        >
          <p className="text-sm font-semibold tracking-[0.16em] text-sky-700 uppercase dark:text-sky-300">
            My Skills
          </p>
          <h3 className="mt-3 text-xl font-bold sm:text-2xl">
            Tech stack I work with
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {Array.from(skillsByCategory.entries()).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 dark:border-slate-700/70 dark:bg-slate-950/40"
              >
                <h4 className="text-sm font-bold tracking-[0.08em] text-sky-700 uppercase dark:text-sky-300">
                  {category}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <div
                      key={skill.id}
                      className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 sm:text-base dark:border-sky-700/80 dark:bg-sky-950/60 dark:text-sky-200"
                    >
                      <Image
                        src={skill.icon_url}
                        width={30}
                        height={30}
                        alt={`${skill.name} icon`}
                        className="size-4 sm:size-5"
                        loading="lazy"
                      />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article
          id="experience"
          className="rounded-3xl border border-sky-100/80 bg-white/70 p-6 shadow-lg shadow-sky-100/60 backdrop-blur-sm sm:p-8 dark:border-sky-900/60 dark:bg-slate-900/50 dark:shadow-sky-950/30"
        >
          <p className="text-sm font-semibold tracking-[0.16em] text-sky-700 uppercase dark:text-sky-300">
            My Experience
          </p>
          <h3 className="mt-3 text-xl font-bold sm:text-2xl">
            Learning through real builds
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-1">
            <div className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 dark:border-slate-700/70 dark:bg-slate-950/40">
              <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                06/2025 - 09/2025
              </p>
              <h4 className="mt-2 text-lg font-bold">
                Fullstack Developer Intern
              </h4>
              <p className="text-sm font-medium text-muted-foreground">
                CanTho University Software Center (CUSC)
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <li>
                  Developed a web-based student, lecturers, academic programs,
                  semesters, and courses management system using Vite, NodeJS,
                  and PostgreSQL, improving administrative efficiency.
                </li>
                <li>
                  Contributed to the development of a real-world Timetable
                  Management System, gaining deep insights into scheduling
                  logic, resource allocation, and operational workflows.
                </li>
                <li>
                  Handled and processed real-world data in a production-like
                  environment, quickly adapting to and implementing new
                  technologies.
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article
          id="projects"
          className="rounded-3xl border border-sky-100/80 bg-white/70 p-6 shadow-lg shadow-sky-100/60 backdrop-blur-sm sm:p-8 dark:border-sky-900/60 dark:bg-slate-900/50 dark:shadow-sky-950/30"
        >
          <p className="text-sm font-semibold tracking-[0.16em] text-sky-700 uppercase dark:text-sky-300">
            My Projects
          </p>
          <h3 className="mt-3 text-xl font-bold sm:text-2xl">
            A selection of my recent works
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700/70 dark:bg-slate-950/40"
              >
                {project.thumbnail_url?.trim() && (
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-700/70">
                    <Image
                      src={project.thumbnail_url}
                      fill
                      alt={`${project.title} preview`}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <h4 className="text-lg font-bold">{project.title}</h4>
                <p className="mt-2 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:border-sky-700/70 dark:bg-sky-950/50 dark:text-sky-300">
                  {formatProjectMonthYear(project.start_date)} -{" "}
                  {formatProjectMonthYear(project.end_date)}
                </p>
                {project.description.length > 0 && (
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description.map((item, index) => (
                      <li key={`${project.id}-description-${index}`}>{item}</li>
                    ))}
                  </ul>
                )}
                {project.Skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.Skills.map((skill) => (
                      <div
                        key={`${project.id}-${skill.id}`}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 sm:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      >
                        <Image
                          src={skill.icon_url}
                          width={20}
                          height={20}
                          alt={`${skill.name} icon`}
                          className="size-4"
                          loading="lazy"
                        />
                        {skill.name}
                      </div>
                    ))}
                  </div>
                )}
                {project.github_url?.trim() && (
                  <Link
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center rounded-full border border-[#6e5494] bg-[#6e5494] px-4 py-2 text-sm font-semibold text-white transition hover:border-[#5b4679] hover:bg-[#5b4679] dark:border-[#8a6bb8] dark:bg-[#8a6bb8] dark:hover:border-[#7a5fa3] dark:hover:bg-[#7a5fa3]"
                  >
                    GitHub Repository
                  </Link>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
