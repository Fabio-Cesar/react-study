import { Validator } from "./abstractValidator"

export class StringValidator extends Validator
{
    constructor(data: any)
    {
        if (typeof(data) === 'string')
        {
            super(data)
        }
        else
        {
            throw new Error("Deve ser informado uma string, o tipo está errado")
        }
    }
}