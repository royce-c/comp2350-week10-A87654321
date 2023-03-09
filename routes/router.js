const router = require('express').Router();
const userModel = include('models/web_user');
// const database = include('databaseConnection');
// const dbModel = include('databaseAccessLayer');
//const dbModel = include('staticData');

// router.get('/', async (req, res) => {
// 	console.log("page hit");
	
// 	try {
// 		const result = await dbModel.getAllUsers();
// 		res.render('index', {allUsers: result});

// 		//Output the results of the query to the Heroku Logs
// 		console.log(result);
// 	}
// 	catch (err) {
// 		res.render('error', {message: 'Error reading from MySQL'});
// 		console.log("Error reading from mysql");
// 	}
// });

router.get('/', async (req, res) => {
	console.log("page hit");
	try {
	const users = await userModel.findAll({attributes:
	['web_user_id','first_name','last_name','email']}); //{where: {web_user_id:1}}
	if (users === null) {
	res.render('error', {message: 'Error connecting to MySQL'});
	console.log("Error connecting to userModel");
	}
	else {
	console.log(users);
	res.render('index', {allUsers: users});
	}
	}
	catch(ex) {
	res.render('error', {message: 'Error connecting to MySQL'});
	console.log("Error connecting to MySQL");
	console.log(ex);
	}
	});

router.get('/deleteUser', async (req, res) => {
	try {
	console.log("delete user");
	let userId = req.query.id;
	if (userId) {
	console.log("userId: "+userId);
	let deleteUser = await userModel.findByPk(userId);
	console.log("deleteUser: ");
	console.log(deleteUser);
	if (deleteUser !== null) {
	await deleteUser.destroy();
	}
	}
	res.redirect("/");
	}
	catch(ex) {
	res.render('error', {message: 'Error connecting to MySQL'});
	console.log("Error connecting to MySQL");
	console.log(ex);
	}
	});



module.exports = router;
