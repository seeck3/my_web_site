export as namespace Types;

export type Maybe<T> = T | null;

export type ContainerProps = {
  value: number;
};

export type HeaderProps = {
  value: number;
  setValue: (value: number) => void;
};

export type GitHubProps = {
  id: string;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
};

export type Educations = {
  school: Education;
};
export type Education = {
  name: string;
  description: string;
  startAt: string | null;
  endAt: string | null;
};

export type WorkExperiences = {
  company: Experience;
};
export type Experience = {
  name: string;
  experience: string[];
  startAt: string;
  endAt: string;
};
