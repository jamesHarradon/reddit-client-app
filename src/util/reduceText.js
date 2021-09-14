export const reduceText = (text) => {

    if (!text.includes(' ')) {
        //returns 40 characters if text has no spaces
        return text.split('').slice(0, 41).join('').concat('...')
    }
    if (text.split(' ').length > 40) {
        // returns 40 words if more than 40 words
        return text.split(' ').slice(0, 41).join(' ').concat('...');
    } else {
        return text;
    }
    
}