import { startCounting } from '../fonctionTest';

jest.useFakeTimers();

test('startCounting démarre bien un intervalle', () => {
  const mockSetSeconds = jest.fn();
  const intervalId = startCounting(mockSetSeconds);

  jest.advanceTimersByTime(3000);

  expect(mockSetSeconds).toHaveBeenCalledTimes(3);
  clearInterval(intervalId);
});