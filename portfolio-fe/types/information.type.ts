interface Information {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
  birthYear: number;
  location: string;
  avatarUrl: string;
  contacts: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}

export default Information;