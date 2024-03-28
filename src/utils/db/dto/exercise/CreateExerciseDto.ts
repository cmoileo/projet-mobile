export class CreateExerciseDto {
  constructor(
    id: number,
    date: Date,
    repetions?: number,
    weight?: number,
    breakTime?: number,
    perf?: any,
  ) {
    this.id = id;
    this.date = date;
    this.repetions = repetions || 0;
    this.weight = weight || 0;
    this.breakTime = breakTime || 0;
    this.perf = perf
  }
  id: number;
  date: Date;
  repetions: number
  weight: number;
  breakTime: number;
    perf: any
}
