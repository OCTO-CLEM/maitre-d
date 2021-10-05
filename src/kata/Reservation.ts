export class Reservation {
  constructor(date: Date, quantityOfSeat: number, name: string) {
    this.date = date;
    this.quantityOfSeat = quantityOfSeat;
    this.name = name;
  }

  date: Date; // pas de date dans le passé
  quantityOfSeat: number; // toujours positif et jamais 0
  name: string;
}
