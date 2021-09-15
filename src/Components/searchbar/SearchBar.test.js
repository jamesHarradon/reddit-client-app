import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';
import store from "../../app/store";
import { Provider } from 'react-redux';


describe('SearchBar component', () => {
    test('It renders the posts component when a search is submitted', () => {
        const { getByPlaceholderText, getByText } = render(<Provider store={store}><App /></Provider>);
        const searchbar = getByPlaceholderText('Enter a keyword');
        fireEvent.change(searchbar, {target: {value: 'cars'}});
        fireEvent.click(getByText('Search'));
        const searchHeading = getByText('Search Results');
        expect(searchHeading).toBeInTheDocument();
    })
})