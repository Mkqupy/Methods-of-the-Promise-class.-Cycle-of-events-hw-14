function delayedPromise(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
  // Створюємо масив промісів з різними значеннями та затримками
  const promises = [
    delayedPromise('Значення 1', 1000),
    delayedPromise('Значення 2', 2000),
    delayedPromise('Значення 3', 500),
    delayedPromise('Значення 4', 3000),
    delayedPromise('Значення 5', 1500)
  ];
  
  Promise.all(promises)
    .then(results => {
      const resultElement = document.getElementById('result');
      resultElement.textContent = 'Результати: ' + results.join(', ');
      console.log('Результати: ' + results.join(', '));
    })
    .catch(error => {
      console.error('Сталася помилка:', error);
    });
  