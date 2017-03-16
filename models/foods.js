const bookshelf = require('bookshelf');

var Food = bookshelf.Model.extend({
  tableName: 'foods',
  hasTimestamps: true
});

var Foods = Bookshelf.Collection.extend({
  model: Food
});

module.exports = bookshelf.model('Food', Food);
