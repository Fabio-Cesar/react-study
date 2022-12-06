import { StringValidator } from "./stringValidator"

export class RegexValidator extends StringValidator
{
    constructor (data: any)
    {
        super(data)

        const stringData = this._data as string
        if (!stringData.match(this.regex))
        {
            throw new Error(`O formato de ${this._data} está errado`)
        }
    }

    get regex()
    {
        return new RegExp("")
    }
}