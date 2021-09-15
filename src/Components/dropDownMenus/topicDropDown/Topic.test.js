import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from '../../../App';
import store from '../../../app/store';
import { Provider } from 'react-redux';


describe('SearchBar component', () => {
    test('It renders the posts component when a search is submitted', () => {
        const { getByText, getByTestId, getAllByTestId } = render(<Provider store={store}><App /></Provider>);
        const dropDown = getByTestId('topic-select');
        fireEvent.change(dropDown, {target: {value: 1}});
        const options = getAllByTestId('topics');
        expect(options[1].selected).toBeTruthy();
        const topicHeading = getByText('Subreddits');
        expect(topicHeading).toBeInTheDocument();
    })
})