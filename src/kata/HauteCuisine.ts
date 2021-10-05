import { Reservation } from './Reservation';

export class HauteCuisine {
  MAX_SEATS_FOR_TWO_PERSON = 4;
  MAX_SEATS_FOR_FOUR_PERSON = 8;

  // NEXT STEP : reservation rule if impair number of seats
  canBeReserved(reservation: Reservation, existingReservations: Reservation[]) {
    if (reservation.quantityOfSeat === 2) {
      const existingReservationsAtTwoPerson =
        this.getExistingReservationsByPerson(existingReservations, 2);
      const reservedSeatsForTwoPerson =
        this.getReservedSeatsForExistingReservations(
          existingReservationsAtTwoPerson,
        );
      return (
        reservation.quantityOfSeat + reservedSeatsForTwoPerson <=
        this.MAX_SEATS_FOR_TWO_PERSON
      );
    } else {
      const existingReservationsAtFourPerson =
        this.getExistingReservationsByPerson(existingReservations, 4);
      const reservedSeatsForFourPerson =
        this.getReservedSeatsForExistingReservations(
          existingReservationsAtFourPerson,
        );
      return (
        reservation.quantityOfSeat + reservedSeatsForFourPerson <=
        this.MAX_SEATS_FOR_FOUR_PERSON
      );
    }
  }

  private getExistingReservationsByPerson(
    existingReservations: Reservation[],
    numberOfPersons: number,
  ) {
    return existingReservations.filter(
      (e) => e.quantityOfSeat === numberOfPersons,
    );
  }

  private getReservedSeatsForExistingReservations(
    existingReservations: Reservation[],
  ) {
    return existingReservations.reduce(
      (total, x) => total + x.quantityOfSeat,
      0,
    );
  }
}
