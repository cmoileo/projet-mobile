import { CreateExerciseDto } from "../exercise/CreateExerciseDto";

export class CreateTrainingDto {
  constructor(exercises: CreateExerciseDto[]) {
    this.exercises = exercises.map(
      (exercise) =>
        new CreateExerciseDto(
          exercise.date,
          exercise.repetions,
          exercise.weight,
          exercise.breakTime
        )
    );
  }
  exercises: CreateExerciseDto[];
}
