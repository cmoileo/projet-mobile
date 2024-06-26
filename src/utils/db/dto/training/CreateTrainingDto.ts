import { CreateExerciseDto } from "../exercise/CreateExerciseDto";

export class CreateTrainingDto {
  constructor(exercises: CreateExerciseDto[], userId: string, name: string, date: Date, training_id: string) {
  constructor(
    exercises: CreateExerciseDto[],
    userId: string,
    name: string,
    date: Date
  ) {
    this.exercises = exercises;
    this.userId = userId;
    this.name = name;
    this.date = date;
    this.training_id = training_id;
  }
  exercises: CreateExerciseDto[];
  name: string;
  userId: string;
  date: Date;
  training_id: string;
}
