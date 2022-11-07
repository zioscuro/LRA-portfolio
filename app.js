// Hero section background effect
const effect = VANTA.WAVES({
  el: '#personal-info', 
  color: 0x193d47,
  waveHeight: 10,
  shininess: 20,
  waveSpeed: 0.3,
  zoom: 0.75
})

setTimeout(() => {
  effect.resize()
}, 100)
