import { CreateExerciseDto } from "../exercise/CreateExerciseDto";

export class CreateTrainingDto {
  constructor(exercises: CreateExerciseDto[], userId: string, name: string, date: Date) {
    this.exercises = exercises.map(
      (exercise) =>
        new CreateExerciseDto(
          exercise.name,
          exercise.date,
          exercise.repetions,
          exercise.weight,
          exercise.breakTime
        )
    );
    this.userId = userId;
    this.name = name;
    this.date = date;
  }
  exercises: CreateExerciseDto[];
  name: string;
  userId: string;
  date: Date;
}
