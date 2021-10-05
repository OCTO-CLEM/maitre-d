import { Reservation } from './Reservation';
import { HauteCuisine } from './HauteCuisine';

describe('canBeReserved', () => {
  describe('when no existing reservations and new reservation quantity is 4', () => {
    it('should return true', () => {
      // Given
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        4,
        'Master Yi',
      );
      const expected = true;

      // When
      const result = new HauteCuisine().canBeReserved(reservation, []);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when existing reservations of 4 seats and new reservation quantity is 4', () => {
    it('should return true', () => {
      // Given
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        4,
        'Master Yi',
      );
      const expected = true;

      // When
      const result = new HauteCuisine().canBeReserved(reservation, [
        new Reservation(new Date(2021, 8, 14), 4, 'Master Yi'),
      ]);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when existing reservations of 2 * 4 seats and new reservation quantity is 4', () => {
    it('should return false', () => {
      // Given
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        4,
        'Master Yi',
      );
      const expected = false;

      // When
      const result = new HauteCuisine().canBeReserved(reservation, [
        new Reservation(new Date(2021, 8, 14), 4, 'Master Yi'),
        new Reservation(new Date(2021, 8, 14), 4, 'Master Yi'),
      ]);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when existing reservations of 2 * 4 seats and new reservation quantity is 2', () => {
    it('should return true', () => {
      // Given
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        2,
        'Master Yi',
      );
      const expected = true;

      // When
      const result = new HauteCuisine().canBeReserved(reservation, [
        new Reservation(new Date(2021, 8, 14), 4, 'Master Yi'),
        new Reservation(new Date(2021, 8, 14), 4, 'Master Yi'),
      ]);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when existing reservations of 2 * 2 and new reservation quantity is 2', () => {
    it('should return false', () => {
      // Given
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        2,
        'Master Yi',
      );
      const expected = false;

      // When
      const result = new HauteCuisine().canBeReserved(reservation, [
        new Reservation(new Date(2021, 8, 14), 2, 'Master Yi'),
        new Reservation(new Date(2021, 8, 14), 2, 'Master Yi'),
      ]);

      // Then
      expect(expected).toEqual(result);
    });
  });

  describe('when existing reservations of 2 * 2 and new reservation quantity is 4', () => {
    it('should return true', () => {
      // Given
      const reservation = new Reservation(
        new Date(2021, 8, 14),
        4,
        'Master Yi',
      );
      const expected = true;

      // When
      const result = new HauteCuisine().canBeReserved(reservation, [
        new Reservation(new Date(2021, 8, 14), 2, 'Master Yi'),
        new Reservation(new Date(2021, 8, 14), 2, 'Master Yi'),
      ]);

      // Then
      expect(expected).toEqual(result);
    });
  });
});
