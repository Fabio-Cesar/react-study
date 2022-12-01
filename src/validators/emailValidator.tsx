import RegexValidator from "./regexValidator";

class EmailValidator extends RegexValidator
{    
    get regex()
    {
        return new RegExp(/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/, "gim");
    }
}

export default EmailValidator;