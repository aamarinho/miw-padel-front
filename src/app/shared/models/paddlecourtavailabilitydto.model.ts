export interface PaddleCourtAvailabilityDto{
  name: string;
  date: Date;
  availabilityHours: Map<string,boolean>
}
