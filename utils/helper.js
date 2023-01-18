const isValidRequest = function (body) {
    if (Object.keys(body).length === 0) return false;
    return true;
};
// Validate name
const isValidName = function (name) {
    return /^[a-zA-Z ]{3,20}$/.test(name)
};
// Validate mobile Number
const isValidPhone = function (phone) {
    return /^[6789]\d{9}$/.test(phone)
};
// validate string type input field
const isValid = function (value) {
    if (typeof value == null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};

const isValidEmail = function(Email) {
    return  /^([A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6})+$/.test(Email)
  }

  const isValidPwd = function(Password)  {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(Password)
  }

  const isValidObjectId = function(ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
  }

module.exports = {isValidRequest,isValidName,isValidPhone,isValid,isValidEmail,isValidPwd,isValidObjectId};