export type BoardData = {
  columns: Column[];
  skills: Skill[];
  epics: Epic[];
  backgroundColor: string;
};

export type Column = {
  id: number;
  name: string;
  backgroundColor: string;
  tasks: Task[];
};

export type Skill = {
  id: number;
  name: string;
};

export type Epic = {
  id: number;
  name: string;
  color: string;
};

export type Task = {
  id: number;
  header: string;
  description?: string;
  dueDate?: string;
  epics: Number[];
  skills: Number[];
};
