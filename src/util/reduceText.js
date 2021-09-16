export const reduceText = (text) => {

    if (!text.includes(' ')) {
        //returns 40 characters if text has no spaces
        return text.split('').slice(0, 41).join('').concat('...')
    }
    if (text.split(' ').length > 30) {
        // returns 40 words if more than 30 words
        return text.split(' ').slice(0, 31).join(' ').concat('...');
    } else {
        return text;
    }
    
}