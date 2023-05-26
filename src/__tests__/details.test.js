import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

describe('render', () => {
  it('should store the correct state in the store', () => {
    const mockStore = configureStore();
    const initialState = {
      characters: {
        characters: [
          {
            id: 1,
            fullName: 'Jon Snow',
            image: 'jonsnow.jpg',
          },
          {
            id: 2,
            fullName: 'Jon Snow',
            image: 'jonsnow.jpg',
          },
          {
            id: 3,
            fullName: 'Jon Snow',
            image: 'jonsnow.jpg',
          },
        ],
      },
    };
    const fakeStore = mockStore(initialState);
    fakeStore.dispatch({ type: 'Get/characters', payload: { characters: initialState } });

    expect(fakeStore.getState()).toEqual(initialState);
  });
});
