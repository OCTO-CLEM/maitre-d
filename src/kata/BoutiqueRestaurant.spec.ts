import { Reservation } from './Reservation';
import { BoutiqueRestaurant } from './BoutiqueRestaurant';

describe('canBeReserved', () => {
  describe('when no existing reservations and new reservation quantity is 1', () => {
    it('should return true', () => {
      // Given
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        1,
        'Master Yi',
      );
      const expected = true;

      // When
      const result = new BoutiqueRestaurant().canBeReserved(reservation, []);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when no existing reservations and new reservation quantity is 13', () => {
    it('should return false', () => {
      // Given
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        13,
        'Master Yi',
      );
      const expected = false;

      // When
      const result = new BoutiqueRestaurant().canBeReserved(reservation, []);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when no reservation existing and new reservation quantity is 12', () => {
    it('should return true', () => {
      // Given
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        12,
        'Master Yi',
      );
      const expected = true;

      // When
      const result = new BoutiqueRestaurant().canBeReserved(reservation, []);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when existing reservation with 10 seats and new reservation quantity is 3', () => {
    it('should return false', () => {
      // Given
      const boutiqueRestaurant = new BoutiqueRestaurant();
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        3,
        'Master Yi',
      );
      const expected = false;

      // When
      const result = boutiqueRestaurant.canBeReserved(reservation, [
        new Reservation(new Date(2021, 8, 14), 10, 'Master Yi'),
      ]);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when existing reservation with 8 seats and new reservation quantity is 3', () => {
    it('should return true', () => {
      // Given
      const boutiqueRestaurant = new BoutiqueRestaurant();
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        3,
        'Master Yi',
      );
      const expected = true;

      // When
      const result = boutiqueRestaurant.canBeReserved(reservation, [
        new Reservation(new Date(2021, 8, 14), 2, 'Master Yi'),
      ]);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when existing reservation with 12 seats the 14-09 and new reservation quantity is 3 at 15-09', () => {
    it('should return true', () => {
      // Given
      const boutiqueRestaurant = new BoutiqueRestaurant();
      const reservation = new Reservation(
        new Date(2021, 8, 15),
        3,
        'Master Yi',
      );
      const expected = true;

      // When
      const result = boutiqueRestaurant.canBeReserved(reservation, [
        new Reservation(new Date(2021, 12, 14), 2, 'Master Yi'),
      ]);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when existing reservation with 12 seats the 15-09 and new reservation quantity is 3 at 15-09', () => {
    it('should return false', () => {
      // Given
      const boutiqueRestaurant = new BoutiqueRestaurant();
      const reservation = new Reservation(
        new Date(2021, 8, 15),
        3,
        'Master Yi',
      );
      const expected = false;

      // When
      const result = boutiqueRestaurant.canBeReserved(reservation, [
        new Reservation(new Date(2021, 8, 14), 2, 'Master Yi'),
        new Reservation(new Date(2021, 8, 15), 12, 'Master Yi'),
      ]);

      // Then
      expect(expected).toEqual(result);
    });
  });
});
