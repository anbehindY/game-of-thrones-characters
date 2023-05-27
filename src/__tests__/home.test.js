import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

describe('render', () => {
  it('should store the correct state in the store', () => {
    const mockStore = configureStore();
    const initialState = {
      characters: {
        families: [
          'House Stark',
          'House Lannister',
          'House Baratheon',
        ],
      },
    };
    const fakeStore = mockStore(initialState);
    fakeStore.dispatch({ type: 'Get/characters', payload: { characters: initialState } });

    expect(fakeStore.getState()).toEqual(initialState);
  });
});
