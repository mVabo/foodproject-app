export default {
  name: 'Sumo',
  address: 'Vestregaten 3, 5009 Bergen',
  description: 'Sumo serverer ferst Sushi og andre asiatiske retter',
  image: require('../../assets/restaurantDummy.jpg'),
  stars: 5,
  menu: [
    {
      name: 'Maki',
      icon: '🍣',
      price: 49.90
    },
    {
      name: 'Nigiri',
      icon: '🍣',
      price: 69.90
    },
  ],
  reviews: [
    {
      stars: 5,
      review: 'Excellent service and tasty sushi!'
    },
    {
      stars: 5,
      review: 'Enjoyable food in a great atmosphere'
    }
  ]
}