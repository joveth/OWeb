module.exports = function(app) {
	app.get('/', exports.Index);
	app.get('/infor', exports.Infor);
	app.get('/about', exports.About);
};
exports.Index = function(req, res){
	res.render('index', { title: 'Home - OWeb' });
};
exports.Infor = function(req, res){
	res.render('oinfor', { title: 'Infor - OWeb' });
};
exports.About = function(req, res){
	res.render('about', { title: 'About - OWeb' });
};