const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (callback) => {
  const temperature = getMarsTemperature();
  if (!callback) {
    const message = `Mars temperature is: ${temperature} degree Celsius`;
    setTimeout(() => console.log(message), messageDelay());
  }

  sendSuccessfully = Math.random() <= 0.6;
  if (sendSuccessfully) {
    setTimeout(() => console.log(callback(temperature)), messageDelay());
  } else {
    handleError('Robot is busy');
  }
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
  );

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
