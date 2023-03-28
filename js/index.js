const btn = document.getElementById('btn')

const enviar = async (path, valor) => {
  const modelo = await tf.loadLayersModel(path)
  const tensor = tf.tensor([valor])
  const result = modelo.predict(tensor)
  const resultado = result.dataSync()[0]
  tensor.dispose()
  result.dispose()

  document.getElementById('result').innerHTML =
    Math.round(resultado * 100) / 100
}

btn.addEventListener('click', (event) => {
  event.preventDefault()
  const valor = Number(document.getElementById('valor').value)
  const o = document.getElementById('option').value
  
  switch (o) {
    case '0':
      enviar('models/Neurona1_M_a_C/model.json', valor)
      break
    case '1':
      enviar('models/Neurona2_K_a_L/model.json', valor)

      break
    case '2':
      enviar('models/Neurona3_C_a_F/model.json', valor)
      break
    default:
      console.log('Error')
  }
})