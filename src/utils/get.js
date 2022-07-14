const obj = {
  data: {
    first: 'Vladislav',
    second: true,
  },
};

get(obj, 'data.first'); // 'Vladislav'
get(obj, 'data.third'); // undefined
get(obj, 'data.third', 'defaultValue'); // 'defaultValue' 
