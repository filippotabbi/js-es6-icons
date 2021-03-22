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
icons.forEach((item) => {
  console.log(`<li><i class="${item.family} ${item.prefix}${item.name}></i></li>`);
  $('#icone').append(`<div class="card col-xs-2 "><i class="${item.family} ${item.prefix}${item.name}"></i>
  <br><div class="title">${item.name}</div></div>`)

});
const animaliblu = icons.filter((element) => element.type == 'animal');
const vegetaligialli = icons.filter((element) => element.type == 'vegetable');
const userviola = icons.filter((element) => element.type == 'user');
icons.forEach((item) => {

  if (animaliblu) {
    $( "i" ).addClass( "blue" );
  }
  else if (vegetaligialli) {
    $( "i" ).addClass( "yellow" );
  }
  else if (userviola) {
    $( "i" ).addClass( "purple" );
  }
});


});
