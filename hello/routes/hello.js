
/*
 * GET home page.
 */

exports.view = function(req, res){
  // request parameter, if doesn't exist, set default to "World"
  var nameToShow = req.params.userName;
  if (nameToShow === undefined) {
    nameToShow = "World";
  }
  // debug statement
  console.log ("Name is: " + nameToShow);
  res.render('index', {
  	'name': nameToShow,
  });
};
