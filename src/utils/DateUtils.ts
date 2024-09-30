export const getTimeString = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
};

export const getDurationString = (start: string, end: string) => {
    const durationMs = new Date(end).getTime() - new Date(start).getTime();

    return `${Math.floor(durationMs / (1000 * 60 * 60))} hours ${Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60))} minutes`;
};

export const getMonthString = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleString('nl-NL', { month: 'short' }).toUpperCase();
}

export const getDayString = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.getDate();
}
