import Project from "@/types/project.type"

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${process.env.BACKEND_URL}/projects`, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Failed to fetch projects")
  }

  const data: Project[] = await response.json()
  return data
}