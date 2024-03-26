export class CreateExerciseDto {
  constructor(
    date: Date,
    repetions: number,
    weight?: number,
    breakTime?: number
  ) {
    this.date = date;
    this.repetions = repetions;
    this.weight = weight || 0;
    this.breakTime = breakTime || 0;
  }
  date: Date;
  repetions: number;
  weight: number;
  breakTime: number;
}
