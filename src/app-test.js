function formValidate(email, password) {
	if(email && password) {
		return true;
	}else{
		return false;
	}
}
module.exports = formValidate;