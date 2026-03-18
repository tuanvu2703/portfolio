interface Project {
  id: string
  title: string
  description: string
  thumbnail_url: string
  github_url: string
  live_url: string | null
  start_date: string
  end_date: string
  createdAt: string
  updatedAt: string
}

export default Project