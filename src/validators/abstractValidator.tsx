class Validator
{
    protected _data: string | number | boolean;

    constructor(data: any)
    {
        this._data = data;
    }
}

export default Validator;