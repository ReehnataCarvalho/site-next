function Tempo(props) {
  const dynamicDate = new Date()
  const dynamicDateString = dynamicDate.toGMTString() // metodo para extrair data em forma de stringpara facilitar leitura

  return (
    <div>
      <div>{dynamicDateString}(dinamico)</div>
      <div>{props.staticDateString}(estático) </div>
    </div>
  )
}

export function getStaticProps() {
  const staticDate = new Date()
  const staticDateString = staticDate.toGMTString()

  return {
    props: {
      staticDateString
    }
  }
}

export default Tempo