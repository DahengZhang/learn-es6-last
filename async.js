const wattingFun = (now) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (now === 'step five' || now === '!pack')
        reject({
          name: `${now} is error!`
        })
      else
        resolve({
          name: now
        })

    }, 500)
  })
}

let results = [{
  key: 'step one',
  status: -1
}, {
  key: 'step two',
  status: -1
}, {
  key: 'step three',
  status: -1
}, {
  key: 'step four',
  status: -1
}]

const asyncFun = async () => {
  let arrIndex = 0
  let catchError = null

  catchError = await wattingFun('pack').then(response => { // eslint-disable-line
    return null
  }).catch(error => {
    return error
  })
  while (arrIndex < results.length && catchError === null) {
    catchError = await wattingFun(results[arrIndex].key).then(response => { // eslint-disable-line
      results[arrIndex++].status = 1
      return null
    }).catch(error => {
      return error
    })
  }
  console.log(catchError, results)
}

asyncFun()
