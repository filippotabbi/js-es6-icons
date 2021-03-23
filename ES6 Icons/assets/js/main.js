  $(document).ready(function () {
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},

	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},

	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
const colori = [
  'blue',
  'orange',
  'purple',
]
const daticolor = icons.map((item, i, array) => {
  if (item.type == "animal") {
    let obj = {
      ...item,
      color: colori[0]
    }
    return obj;
  }
  else if (item.type == "vegetable") {
    let obj = {
      ...item,
      color: colori[1]
    }
    return obj;
  }
  else {
    let obj = {
      ...item,
      color: colori[2]
    }
    return obj;
  }
});
console.log(daticolor);

daticolor.forEach((item) => {
  console.log(`<li><i class="${item.family} ${item.prefix}${item.name}></i></li>`);
  $('#icone').append(`<div class="card col-xs-2 "><i class="${item.family} ${item.prefix}${item.name} ${item.color}"></i>
  <br><div class="title">${item.name}</div></div>`)

});


});
