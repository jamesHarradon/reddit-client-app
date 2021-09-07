export const postedWhen = (created) => {
    
    const diff = Date.now() - (created * 1000);
    const secs = Math.round(diff / 1000);
    const mins = Math.round(secs / 60);
    const hours = Math.round(mins / 60);
    const days = Math.round(hours / 24);
    
    if ( secs < 3600) {
        return `${mins} mins ago`
    } else if (secs < 86400) {
        return `${hours} hours ago`
    } else {
        return `${days} days ago`
    }
}