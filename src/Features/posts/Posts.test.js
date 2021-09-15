import reducer from '../posts/postsSlice';

describe('Posts Component', () => {
    test('Should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            hasFailed: false,
            isLoading: false,
            posts: []
        })
    })
})