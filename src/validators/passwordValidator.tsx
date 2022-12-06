import { RegexValidator } from "./regexValidator"

export class PasswordValidator extends RegexValidator
{
    get regex()
    {
        return new RegExp(/^\w{1,}$/, "gim")
    }
}