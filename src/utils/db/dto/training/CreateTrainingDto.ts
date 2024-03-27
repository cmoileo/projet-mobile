import { CreateExerciseDto } from "../exercise/CreateExerciseDto";

export class CreateTrainingDto {
  constructor(exercises: CreateExerciseDto[], userId: string) {
    this.exercises = exercises.map(
      (exercise) =>
        new CreateExerciseDto(
          exercise.date,
          exercise.repetions,
          exercise.weight,
          exercise.breakTime
        )
    );
    this.userId = userId;
  }
  exercises: CreateExerciseDto[];
  userId: string;
}
