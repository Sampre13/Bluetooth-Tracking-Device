export const data = {
    datasets: [{ data: [{x:1, y:1}], backgroundColor: 'rgb(255, 99, 132)'  }]
};

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        x: {
            position: "top",
            min: -10,
            max: 10
        },
        y: {
            position: "right",
            min: -10,
            max: 10
        },
    }
}
