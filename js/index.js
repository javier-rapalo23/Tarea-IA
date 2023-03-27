const btn = document.getElementById('btn')

const convertir = async (path, valor) => {
  const modelo = await tf.loadLayersModel(path)
  const tensor = tf.tensor([valor])
  const result = modelo.predict(tensor)
  const resultadoFinal = result.dataSync()[0]
  tensor.dispose()
  result.dispose()

  document.getElementById('result').innerHTML =
    Math.round(resultadoFinal * 100) / 100
}

btn.addEventListener('click', (event) => {
  event.preventDefault()
  const valor = Number(document.getElementById('valor').value)
  const o = document.getElementById('option').value

  switch (o) {
    case '0':
      convertir('models/Neurona1_M_a_C/model.json', valor)
      break
    case '1':
      convertir('models/Neurona2_K_a_L/model.json', valor)

      break
    case '2':
      convertir('models/Neurona3_C_a_F/model.json', valor)
  }
})