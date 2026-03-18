import Skill from "@/types/skill.type";

export const fetchSkills = async (name?: string): Promise<Skill[]> => {
  const url = name
    ? `${process.env.BACKEND_URL}/skills?name=${encodeURIComponent(name)}`
    : `${process.env.BACKEND_URL}/skills`;
    const response = await fetch(url, {
      cache: "no-store",
    });
    if (!response.ok) {
        throw new Error("Failed to fetch skills");
    }
    const data: Skill[] = await response.json();
    return data;
};