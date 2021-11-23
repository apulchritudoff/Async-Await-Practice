

    function getRandomNumber() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNumber = Math.random();
                resolve(randomNumber);
            }, 500);
        });

    }

    getRandomNumber().then(randomNumber => {
        console.log(randomNumber);
    });


    async function getRandomNumberTwo() {
        const randomNumber = await getRandomNumber();
        console.log(randomNumber);
    }

    getRandomNumberTwo();


  

    async function getCity(city) {
        console.log(city);
        const url = `https://geocode.xyz/${city}?json=1`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.latt, data.longt);
    }
    
  // get city name from user and pass it to getCity function
    getCity(prompt('Enter city name'));
    
