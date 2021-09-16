import reducer from '../trending/trendingSlice';



describe('Trending component', () => {
    test('Should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            hasFailed: false,
            isLoading: false,
            posts: []
        })
    })
})



