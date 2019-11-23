export const dataExists = (dataArr, id) => dataArr.some(item => item.id === id);

export const toFahrenheit = (celsius) => Math.round((celsius * (9/5)) + 32);