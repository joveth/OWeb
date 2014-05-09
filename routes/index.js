module.exports = function(app) {
	app.get('/', exports.Index);
	app.get('/infor', exports.Infor);
};
exports.Index = function(req, res){
	res.render('index', { title: 'Home - OWeb' });
};
exports.Infor = function(req, res){
	res.render('infor', { title: 'Infor - OWeb' });
};