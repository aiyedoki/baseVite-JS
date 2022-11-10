window.BASE_URL = (function () {
  if (import.meta.env.MODE === 'development') {
    return 'http://127.0.0.1:3000'
  } else {
    return 'http://119.29.147.193:2333'
  }
})()
