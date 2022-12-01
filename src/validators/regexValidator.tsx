import StringValidator from "./stringValidator";

class RegexValidator extends StringValidator
{
    constructor (data: any)
    {
        super(data);

        const stringData = this._data as string;
        if (!stringData.match(this.regex))
        {
            throw new Error('O formato está errado');
        }
    }

    get regex()
    {
        return new RegExp("");
    }
}

export default RegexValidator;