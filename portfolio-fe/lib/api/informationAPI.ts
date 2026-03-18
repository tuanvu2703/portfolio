import Information from "@/types/information.type";

export const fetchInformation = async (): Promise<Information> => {
  const response = await fetch(`${process.env.BACKEND_URL}/information`);
    if (!response.ok) {
        throw new Error("Failed to fetch information");
    }
    const data: Information = await response.json();
    return data;
};