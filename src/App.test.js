import { render, fireEvent } from '@testing-library/react';
import App from './App';
import SongsList from './SongsList';




//visual checks//

test('renders learn react link', () => {
  const component = render(<App />)
  const iTunesHeader = component.getByTestId("itunes-header")
  expect(iTunesHeader.textContent).toBe("iTunes Songs")
})





test('renders search bar', () => {
  const component = render(<App />)
  const searchComponent = component.getByTestId("search-bar")
  expect(searchComponent)
})


test('renders clear button', () => {
  const component = render(<App />)
  const clearButton = component.getByTestId("clear")
  expect(clearButton.textContent).toBe("Clear")
})


test('renders song names', () => {
  const component = render(<SongsList />)
  const songsList = component.getByTestId("songsList")
  expect(songsList.textContent)
})

//logic tests//

test('search bar renders matches', () => {
  const component = render(<App />)
  const inputEl = component.getByTestId("search-bar")

  fireEvent.change(inputEl, {
    target: {
      value: "Queen"
    }

  });

  expect(inputEl.value).toBe("Queen")
})