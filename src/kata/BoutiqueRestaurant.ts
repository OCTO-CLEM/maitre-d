import { Reservation } from './Reservation';

export class BoutiqueRestaurant {
  MAX_SEATS = 12;

  canBeReserved(reservation: Reservation, existingReservations: Reservation[]) {
    const existingReservationsAtNewReservationDate =
      existingReservations.filter(
        (existingReservation) =>
          existingReservation.date.getTime() === reservation.date.getTime(),
      );
    const reservedSeats = existingReservationsAtNewReservationDate.reduce(
      (total, x) => total + x.quantityOfSeat,
      0,
    );
    if (reservedSeats === 0) {
      return this.canBeReservedWhenAllSeatsAvailable(reservation);
    } else {
      return this.canBeReservedWhenSomeSeatsAreAvailable(
        reservation,
        reservedSeats,
      );
    }
  }

  private canBeReservedWhenAllSeatsAvailable(reservation: Reservation) {
    return reservation.quantityOfSeat <= this.MAX_SEATS;
  }

  private canBeReservedWhenSomeSeatsAreAvailable(
    reservation: Reservation,
    reservedSeats: number,
  ) {
    return reservation.quantityOfSeat + reservedSeats <= this.MAX_SEATS;
  }
}
