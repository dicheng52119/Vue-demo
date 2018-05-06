import HomePageData from './home.json'

var sliderImages = require.context('./sliders', false, /\.(png|jpg|gif|svg)$/)
var coverImages = require.context('./covers', false, /\.(png|jpg|gif|svg)$/)

HomePageData.top.forEach((x) => {
  x.img_url = sliderImages('./' + x.img_url)
})

HomePageData.promotions.forEach((x) => {
  x.img_url = coverImages('./' + x.img_url)
})

export default {
  getHomeData () {
    return HomePageData
  }
}
