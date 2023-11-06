

export const sortDataByDateTime = (data) => {
    console.log(data);
    return data.sort((a, b) => {
        const dateA = new Date(`${a.date} ${a.time}`);
        const dateB = new Date(`${b.date} ${b.time}`);
        return dateA - dateB;
    });
};