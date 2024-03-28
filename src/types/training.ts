export type Exercise = {
  id: string;
  date: Date;
  repetitions: number;
  weight: number;
  breakTime: number;
};

export type Training = {
  id: string;
  exercises: Exercise[];
  userId: string;
};
