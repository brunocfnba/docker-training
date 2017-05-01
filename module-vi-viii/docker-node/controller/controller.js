(function () {
    "use strict";
    
    module.exports = function (app, request) {
        
        app.get("/list", function (req, res) {
            request.get("http://pyapp:8080/myservice/list", function (err, data) {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.status(200).send(JSON.parse(data.body));
            });
        });
        
        app.get("/add/:product_name", function (req, res) {
            var product_name = req.params.product_name;
            request.get("http://pyapp:8080/myservice/add/" + product_name, function (err, data) {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.status(200).send(JSON.parse(data.body));
            });
        });
    
        app.get("/", function (req, res) {
            return res.status(200).render("./front/index.html");
        });
        
    };
}());
