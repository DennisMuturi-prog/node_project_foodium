"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @deno-types="npm:@types/express@4.17.15"
var express_1 = require("express");
// @deno-types="npm:@types/passport@1.0.17"
var passport_1 = require("passport");
require("./auth/auth.ts");
var AuthTokens_js_1 = require("./auth/AuthTokens.js");
var routesHandler_js_1 = require("./RouteHandlers/routesHandler.js");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false, limit: '50mb' }));
app.use(express_1.default.json({ limit: '50mb' }));
app.use(passport_1.default.initialize());
app.get('/auth/google', passport_1.default.authenticate('google', { session: false, scope: ['email', 'profile'] }));
app.get('/auth/google/callback', function (req, res) {
    passport_1.default.authenticate('google', { session: false }, function (err, user, _info, _status) {
        if (err) {
            return res.status(404).send('failed to authenticate');
        }
        console.log(user);
        if (user) {
            var authTokens = (0, AuthTokens_js_1.createAuthTokens)(user);
            res.cookie("id", authTokens.accessToken);
            res.cookie("rid", authTokens.refreshToken);
            return res.json(authTokens);
        }
        return res.redirect('/failure');
    })(req, res);
});
app.post('/protected', routesHandler_js_1.checkAuthentication, function (req, res) {
    if (req.newTokens) {
        res.json({ id: req.userId, newTokens: req.newTokens });
        return;
    }
    res.json({ id: req.userId });
    return;
});
app.post('/register', routesHandler_js_1.registerRouteHandler);
app.post('/login', routesHandler_js_1.loginRouteHandler);
app.post('/getRecipes', routesHandler_js_1.checkAuthentication, routesHandler_js_1.fetchPaginatedRecipesHandler);
app.post('/addUsername', routesHandler_js_1.checkAuthentication, routesHandler_js_1.addUsernameForOauthHandler);
app.post('/addReview', routesHandler_js_1.checkAuthentication, routesHandler_js_1.addRecipeReviewHandler);
app.post('/addRating', routesHandler_js_1.checkAuthentication, routesHandler_js_1.addRecipeRatingHandler);
app.post('/getRecipeReviews', routesHandler_js_1.checkAuthentication, routesHandler_js_1.getReviewsHandler);
app.post('/addRecipeIntake', routesHandler_js_1.checkAuthentication, routesHandler_js_1.addRecipeIntakeHandler);
app.post('/addFoodIntake', routesHandler_js_1.checkAuthentication, routesHandler_js_1.addFoodIntakeHandler);
app.post('/getUserReviews', routesHandler_js_1.checkAuthentication, routesHandler_js_1.getUserReviewsHandler);
app.post('/getUserRatings', routesHandler_js_1.checkAuthentication, routesHandler_js_1.getUserRatingsHandler);
app.post('/getUserRecipeIntake', routesHandler_js_1.checkAuthentication, routesHandler_js_1.getUserRecipeIntakeHandler);
app.post('/getUserFoodIntake', routesHandler_js_1.checkAuthentication, routesHandler_js_1.getUserFoodIntakeHandler);
app.get('/failure', function (_req, res) {
    res.send("\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>Failure</title>\n      <style>\n        body {\n          font-family: Arial, sans-serif;\n          background-color: #f8d7da;\n          color: #721c24;\n          text-align: center;\n          padding: 50px;\n        }\n        .container {\n          max-width: 600px;\n          margin: 0 auto;\n          padding: 20px;\n          border: 1px solid #f5c6cb;\n          border-radius: 5px;\n          background-color: #f8d7da;\n        }\n        h1 {\n          font-size: 2em;\n        }\n        p {\n          font-size: 1.2em;\n        }\n        a {\n          color: #721c24;\n          text-decoration: none;\n          font-weight: bold;\n        }\n      </style>\n    </head>\n    <body>\n      <div class=\"container\">\n        <h1>Authentication Failed</h1>\n        <p>Sorry, we couldn't authenticate your request. Please try again.</p>\n        <p><a href=\"/\">Go back to the homepage</a></p>\n      </div>\n    </body>\n    </html>\n  ");
});
app.listen(3000, function () { return console.log('running'); });
