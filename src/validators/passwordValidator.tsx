import RegexValidator from "./regexValidator";

class PasswordValidator extends RegexValidator
{
    get regex()
    {
        return new RegExp(/^\w{1,}$/, "gim");
    }
}

export default PasswordValidator;