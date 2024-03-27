export class CreateExerciseDto {
  constructor(
    name: string,
    date: Date,
    repetions: number,
    weight?: number,
    breakTime?: number
  ) {
    this.name = name
    this.date = date;
    this.repetions = repetions;
    this.weight = weight || 0;
    this.breakTime = breakTime || 0;
  }
    name: string;
  date: Date;
  repetions: number;
  weight: number;
  breakTime: number;
}
