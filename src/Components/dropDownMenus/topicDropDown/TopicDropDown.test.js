import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from '../../../App';
import store from '../../../app/store';
import { Provider } from 'react-redux';


describe('SearchBar component', () => {
    test('It renders the posts component when a search is submitted', () => {
        const { getByText, getByTestId } = render(<Provider store={store}><App /></Provider>);
        fireEvent.change(getByTestId('topic-select'), {target: {value: 1}});
        const topicHeading = getByText('Subreddits');
        expect(topicHeading).toBeInTheDocument();
    })
})