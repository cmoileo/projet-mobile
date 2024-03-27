import { CreateExerciseDto } from "../exercise/CreateExerciseDto";

export class CreateTrainingDto {
  constructor(exercises: CreateExerciseDto[] | string[], userId: string, name: string, date: Date) {
    this.exercises = exercises.map(
      (exercise) => {
        if (typeof exercise === "string") {
            return new CreateExerciseDto(exercise, new Date());
        } else {
          return new CreateExerciseDto(
              exercise.name,
              exercise.date,
              exercise.repetions,
              exercise.weight,
              exercise.breakTime
          )
        }
      }
    );
    this.userId = userId;
    this.name = name;
    this.date = date;
  }
  exercises: CreateExerciseDto[] | string[]
  name: string;
  userId: string;
  date: Date;
}
