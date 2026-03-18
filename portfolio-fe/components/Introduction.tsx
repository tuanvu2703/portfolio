import { fetchProjects } from "@/lib/api/projectAPI"
import { fetchSkills } from "@/lib/api/skillAPI"
import Project from "@/types/project.type"
import Skill from "@/types/skill.type"
import Image from "next/image"

type WantedSkill = {
  label: string
  query: string
  aliases: string[]
}

const wantedSkills: WantedSkill[] = [
  { label: "JavaScript", query: "javascript", aliases: ["javascript"] },
  { label: "TypeScript", query: "typescript", aliases: ["typescript"] },
  { label: "HTML", query: "html", aliases: ["html"] },
  { label: "CSS", query: "css", aliases: ["css"] },
  { label: "PHP", query: "php", aliases: ["php"] },
  { label: "Nodejs", query: "node", aliases: ["nodejs", "node.js", "node"] },
  { label: "Express", query: "express", aliases: ["express"] },
  { label: "MySQL", query: "mysql", aliases: ["mysql"] },
  {
    label: "PostgreSQL",
    query: "postgresql",
    aliases: ["postgresql", "postgres"],
  },
  { label: "Postman", query: "postman", aliases: ["postman"] },
  { label: "Git", query: "git", aliases: ["git"] },
  {
    label: "ReactJS",
    query: "react",
    aliases: ["reactjs", "react.js", "react"],
  },
  {
    label: "TailwindCSS",
    query: "tailwind",
    aliases: ["tailwindcss", "tailwind css", "tailwind"],
  },
  { label: "NextJS", query: "next", aliases: ["nextjs", "next.js", "next"] },
]

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "")

const pickSkillFromResults = (target: WantedSkill, results: Skill[]) => {
  const matched = results.find((item) => {
    const normalizedName = normalize(item.name)
    return target.aliases.some((alias) => normalizedName === normalize(alias))
  })

  if (!matched) {
    return null
  }

  return {
    ...matched,
    displayName: target.label,
  }
}

const getSkillsFromSearchApi = async () => {
  const searchResults = await Promise.all(
    wantedSkills.map(async (target) => {
      const results = await fetchSkills(target.query)
      return pickSkillFromResults(target, results)
    })
  )

  return searchResults.filter(
    (item): item is Skill & { displayName: string } => item !== null
  )
}

const pickRequiredSkillsFromAll = (skills: Skill[]) => {
  return wantedSkills
    .map((target) => {
      const matched = skills.find((item) => {
        const normalizedName = normalize(item.name)
        return target.aliases.some(
          (alias) => normalizedName === normalize(alias)
        )
      })

      if (!matched) {
        return null
      }

      return {
        ...matched,
        displayName: target.label,
      }
    })
    .filter((item): item is Skill & { displayName: string } => item !== null)
}

const formatProjectDescription = (description: string) => {
  try {
    const parsed = JSON.parse(description)

    if (typeof parsed === "string") {
      return parsed
    }

    if (parsed && typeof parsed === "object") {
      const firstKey = Object.keys(parsed)[0]
      if (firstKey) {
        return firstKey
      }
    }
  } catch {
    // Keep fallback cleanup for malformed seeded data.
  }

  return description
    .replace(/^\{"?/, "")
    .replace(/"?\}$/, "")
    .replace(/\\n/g, " ")
    .trim()
}

export default async function Introduction() {
  let skills: Array<Skill & { displayName: string }> = []
  let projects: Project[] = []

  try {
    const [skillsFromSearchApi, projectsFromApi] = await Promise.all([
      getSkillsFromSearchApi(),
      fetchProjects(),
    ])

    skills = skillsFromSearchApi
    projects = projectsFromApi
  } catch {
    const [skillsFromApi, projectsFromApi] = await Promise.all([
      fetchSkills(),
      fetchProjects(),
    ])

    skills = pickRequiredSkillsFromAll(skillsFromApi)
    projects = projectsFromApi
  }

  const skillsByCategory = skills.reduce((groups, skill) => {
    const category = skill.category?.trim() || "Others"

    if (!groups.has(category)) {
      groups.set(category, [])
    }

    groups.get(category)?.push(skill)
    return groups
  }, new Map<string, Array<Skill & { displayName: string }>>())

  const experiences = [
    {
      period: "06/2025 - 09/2025",
      role: "Fullstack Developer Intern",
      company: "CanTho University Software Center (CUSC)",
      description: "CanTho University Software Center (CUSC)",
    },
  ]

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
            I focus on backend-first thinking while still caring deeply about
            user experience. My goal is to create products that are
            maintainable, performant, and easy for real users to understand.
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
                        alt={`${skill.displayName} icon`}
                        className="size-4 sm:size-5"
                        loading="lazy"
                      />
                      {skill.displayName}
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
            {experiences.map((item) => (
              <div
                key={`${item.period}-${item.role}`}
                className="rounded-2xl border border-slate-200/80 bg-white/85 p-5 dark:border-slate-700/70 dark:bg-slate-950/40"
              >
                <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                  {item.period}
                </p>
                <h4 className="mt-2 text-lg font-bold">{item.role}</h4>
                <p className="text-sm font-medium text-muted-foreground">
                  {item.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
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
                <h4 className="text-lg font-bold">{project.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {formatProjectDescription(project.description)}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
