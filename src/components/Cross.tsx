const Cross = () => {
  return (
    // Draw an image in HTML using Scalable Vector Graphics
    // Draw two lines to form a X
    <svg width="100" height="100" viewBox="-50 -50 100 100" className="fill-none stroke-sky-400 stroke-12">
        <line x1="-40" y1="-40" x2="40" y2="40"/>
        <line x1="-40" y1="40" x2="40" y2="-40"/>
    </svg>
  )
}

export default Cross