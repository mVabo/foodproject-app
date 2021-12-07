import moment from "moment";

export default [
  {
    icon: '🍣',
    price: 199,
    expiry: moment(new Date).add(5, 'minutes'),
    id: 1
  },
  {
    icon: '🍔',
    price: 299,
    expiry: moment(new Date).add(10, 'minutes'),
    id: 2
  },
  {
    icon: '🥩',
    price: 149,
    expiry: moment(new Date).add(15, 'minutes'),
    id: 3
  },
];