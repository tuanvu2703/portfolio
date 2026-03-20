import Skill from "@/types/skill.type"

interface Project {
  id: string
  title: string
  description: string[]
  role: string
  thumbnail_url: string
  github_url: string
  live_url: string | null
  start_date: string
  end_date: string
  createdAt: string
  updatedAt: string
  Skills: Skill[]
}

export default Project