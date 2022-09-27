const Article = require('../models/article'); 
/*
1. Import the Article model which connects us to the database.
2. There is one resolver function per API endpoint. Each performs a CRUD action on the database and returns the result. 
   The find, findById, save, findByIDandRemove, and findByIdAndUpdate are all methods from the Mongoose ORM.
3. The Model.findByIdAndUpdate(id, update, options, callback) method returns the original document by default not the updated one. 
   To return the updated object you need to add the {new: true} option.
*/
function articles() { 
  return Article.find({});
}

function article(args) {
  return Article.findById(args.id)
}

function createArticle(args) {
  let article = new Article(args.articleInput);
  console.log(article);
  return article.save();
}

function deleteArticle(args) {
  return Article.findByIdAndRemove(args.id);
}

function updateArticle(args) {
  return Article.findByIdAndUpdate(args.id, args.articleInput, { new: true }); 
}

module.exports = { articles, article, createArticle, deleteArticle, updateArticle }