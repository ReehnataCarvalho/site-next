async function tempo(req, res) {
  const dynamicDate = new Date()
  const apiSecret = process.env.CONVERTKIT_API_SECRET

  const subscriberResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`)
  const subscriberResponseJson = await subscriberResponse.json()
  const inscritos = subscriberResponseJson.total_subscribers

  res.json({
    date: dynamicDate.toGMTString(),
    inscritos: `${inscritos} OPA`
  })
}

export default tempo