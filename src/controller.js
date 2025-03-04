export default class controller {
    response({res , message = null, status = 200, data = null}){
        return res.status(status).json({
            message,
            data,
        })
    }
};