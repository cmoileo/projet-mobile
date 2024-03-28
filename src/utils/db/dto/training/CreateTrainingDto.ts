import { CreateExerciseDto } from "../exercise/CreateExerciseDto";

export class CreateTrainingDto {
  constructor(exercises: CreateExerciseDto[], userId: string, name: string, date: Date) {
    this.exercises = exercises.map(
      (exercise) => {
        const createdExercise = {
          name: exercise.name,
          date: exercise.date,
          repetions: exercise.repetions,
          weight: exercise.weight,
          breakTime: exercise.breakTime
        }
          return createdExercise;
      }
    );
    this.userId = userId;
    this.name = name;
    this.date = date;
  }
  exercises: CreateExerciseDto[]
  name: string;
  userId: string;
  date: Date;
}
