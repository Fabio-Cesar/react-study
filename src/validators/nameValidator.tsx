import { RegexValidator } from "./regexValidator"

export class NameValidator extends RegexValidator
{
    get regex()
    {
        return new RegExp(/^([a-z]{1,})([ ]{1}[a-z]{1,}){0,}$/, "gim")
    }
}