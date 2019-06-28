exports.index = async (ctx) => {
    ctx.body = `search: ${ctx.query.name}`;
 };

exports.new = async (ctx ) => { 
    ctx.body = `new`;
};

exports.create = async (ctx ) => { 
    ctx.body = `create`;
};

exports.show = async () => { };

exports.edit = async () => { };

exports.update = async () => { };

exports.destroy = async () => { };