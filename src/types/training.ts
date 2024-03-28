export type Perf = {
  date: Date;
  repetitions: number;
  weight: number;
  breakTime: number;
  indice: number;
};

export type Exercise = {
  id: string;
  perf: Perf[];
};

export type Training = {
  id: string;
  exercises: Exercise[];
  userId: string;
};
