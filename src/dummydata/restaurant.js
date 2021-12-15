export default {
  id: '69420',
  name: 'Sumo',
  address: 'Vestregaten 3, 5009 Bergen',
  description: 'Sumo serverer ferst Sushi og andre asiatiske retter',
  extendedDescription: 'Sumo serverer ferst Sushi og andre asiatiske retter, her kunne det vært mere info, men vi er lite kreative, så vi legger inn placeholder tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: require('../../assets/restaurantDummy.jpg'),
  stars: 5,
  location: {
    latitude: 60.392909,
    longitude: 5.318855
  },
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