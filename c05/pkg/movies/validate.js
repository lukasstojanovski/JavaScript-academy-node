const { Validator } =require("node-input-validator");

const Movie = {
    name: 'required|string',
    year: 'required|integer',
    main_actor: 'required|string'
};

const validate = async (date, scheme) => {
    let v = new Validator(date, scheme);
    let e = await v.check();
    if(!e) {
        throw v.errors
    }
};

module.exports = {
    Movie,
    validate
}