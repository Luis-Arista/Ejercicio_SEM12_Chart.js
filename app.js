const getWeather = async() => {
    const url = 'https://api.waqi.info/feed/Mexico/?token=237fdba43ea66313061dec5475e08eece1d4b0c4';
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)

    setGraph( data.data )
};

const setGraph = ( values ) => {
    const labels = Object.keys(values.iaqi)
    const converData = Object.values(values.iaqi).map( (item) => {return item.v})
    
    
    const dataConfig = {
        labels:labels,
        datasets: [{
            leabel: 'my primer dataSet',
            backgroundColor: 'rgba(255, 0, 0, 0.493)',
            borderColor: 'rgba(255, 0, 0, 0.493)',
            data: converData,
        }]
    }

    const config = {
        type: 'bar',
        data: dataConfig,
        options: {
            scales: {
                y:{
                    beginAtZero: true
                }
            }
        }

    }


    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    )

    const dataConfigDos = {
        labels:labels,
        datasets: [{
            leabel: 'my primer dataSet',
            borderColor: 'rgb(255, 255, 1)',
            data: converData,
        }]
    }

    const configDos = {
        type: 'line',
        data: dataConfigDos
    }

    const myChartDos = new Chart(
        document.getElementById('myChart_dos'),
        configDos
    )
    

    const dataConfigTres = {
        labels:labels,
        datasets: [{
            leabel: 'my primer dataSet',
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(44, 44, 44)',
                '#FF2E02',
                '#A5C934',
                '#345DC9',
                '#6476A6',
                '#BB3FC3',
                '#C33F9F',
                '#C892B9',
                '#78D3E0',

              ],
            data: converData,
        }]
    }

    const configTres = {
        type: 'pie',
        data: dataConfigTres
    }

    const myChartTres = new Chart(
        document.getElementById('myChart_tres'),
        configTres
    )
}

getWeather()


