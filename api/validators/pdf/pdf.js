
exports.download = async (req, res, next) => {
    validViews = ['amsterdam', 'oslo', 'soho']
    validModes = ['colored', 'dark', 'gradient', 'light']
    let {view, mode} = req.body
    if (req.method == 'GET') {
        view = req.query.view
        mode = req.query.mode
    }
    console.log(10, req.method)
    console.log(11, view, mode)
    if(!view){
        return res.json({status: -1, title: "Sorry!", error: "Enter the view name please!"})
    }

    if(!validViews.includes(view)){
        return res.json({status: -1, title: "Sorry!", error: "The view name is not valid! (amsterdam, oslo, soho)"})
    }

    if(!mode){
        return res.json({status: -1, title: "Sorry!", error: "Enter the mode please!"})
    }

    if(!validModes.includes(mode)){
        return res.json({status: -1, title: "Sorry!", error: "The mode is not valid! (colored, dark, gradient, light)"})
    }
    next()
}