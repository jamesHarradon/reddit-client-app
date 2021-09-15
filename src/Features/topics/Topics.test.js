import reducer from '../topics/topicsSlice';

describe('Topics component', () => {
    test('Should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            hasFailed: false,
            isLoading: false,
            topics: []
        })
    })
})