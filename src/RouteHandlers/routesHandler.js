"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuthentication = exports.registerRouteHandler = exports.loginRouteHandler = exports.fetchPaginatedRecipesHandler = exports.addUsernameForOauthHandler = exports.addRecipeRatingHandler = exports.addRecipeReviewHandler = exports.getReviewsHandler = exports.addFoodIntakeHandler = exports.addRecipeIntakeHandler = exports.getUserReviewsHandler = exports.getUserRatingsHandler = exports.getUserFoodIntakeHandler = exports.getUserRecipeIntakeHandler = void 0;
var AuthTokens_js_1 = require("../auth/AuthTokens.js");
var bcrypt = require("bcrypt");
var mysqlDB_js_1 = require("../sqlDB/mysqlDB.js");
var getUserRecipeIntakeHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getUserRecipeIntakeInfo, results, results, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getUserRecipeIntakeInfo = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                if (!getUserRecipeIntakeInfo.next) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, mysqlDB_js_1.findUserRecipeIntake)(req.userId, getUserRecipeIntakeInfo.region, getUserRecipeIntakeInfo.next)];
            case 2:
                results = _a.sent();
                if (results.length > 0) {
                    res.json({ results: results, next: results[results.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no user recipe intake available');
                    return [2 /*return*/];
                }
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, (0, mysqlDB_js_1.findUserRecipeIntake)(req.userId, getUserRecipeIntakeInfo.region)];
            case 4:
                results = _a.sent();
                if (results.length > 0) {
                    res.json({ results: results, next: results[results.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no user recipe intake available');
                    return [2 /*return*/];
                }
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.log('error at get user recipe intake', error_1);
                res.status(404).send('an error occurred while retrieving user recipe intake,try again');
                return [2 /*return*/];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getUserRecipeIntakeHandler = getUserRecipeIntakeHandler;
var getUserFoodIntakeHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getUserRecipeIntakeInfo, results, results, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getUserRecipeIntakeInfo = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                if (!getUserRecipeIntakeInfo.next) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, mysqlDB_js_1.findUserFoodIntake)(req.userId, getUserRecipeIntakeInfo.next)];
            case 2:
                results = _a.sent();
                if (results.length > 0) {
                    res.json({ results: results, next: results[results.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no user food intake available');
                    return [2 /*return*/];
                }
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, (0, mysqlDB_js_1.findUserFoodIntake)(req.userId)];
            case 4:
                results = _a.sent();
                if (results.length > 0) {
                    res.json({ results: results, next: results[results.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no user food intake available');
                    return [2 /*return*/];
                }
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_2 = _a.sent();
                console.log('error at get user food intake', error_2);
                res.status(404).send('an error occurred while retrieving user food intake,try again');
                return [2 /*return*/];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getUserFoodIntakeHandler = getUserFoodIntakeHandler;
var getUserRatingsHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getUserRatingsInfo, results, results, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getUserRatingsInfo = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                if (!getUserRatingsInfo.next) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, mysqlDB_js_1.findUserRatings)(req.userId, getUserRatingsInfo.region, getUserRatingsInfo.next)];
            case 2:
                results = _a.sent();
                if (results.length > 0) {
                    res.json({ results: results, next: results[results.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no user ratings available');
                    return [2 /*return*/];
                }
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, (0, mysqlDB_js_1.findUserRatings)(req.userId, getUserRatingsInfo.region)];
            case 4:
                results = _a.sent();
                if (results.length > 0) {
                    res.json({ results: results, next: results[results.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no user ratings available');
                    return [2 /*return*/];
                }
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_3 = _a.sent();
                console.log('error at get user ratings', error_3);
                res.status(404).send('an error occurred while retrieving user ratings,try again');
                return [2 /*return*/];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getUserRatingsHandler = getUserRatingsHandler;
var getUserReviewsHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getUserReviewsInfo, results, results, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getUserReviewsInfo = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                if (!getUserReviewsInfo.next) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, mysqlDB_js_1.findUserReviews)(req.userId, getUserReviewsInfo.region, getUserReviewsInfo.next)];
            case 2:
                results = _a.sent();
                if (results.length > 0) {
                    res.json({ results: results, next: results[results.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no user reviews available');
                    return [2 /*return*/];
                }
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, (0, mysqlDB_js_1.findUserReviews)(req.userId, getUserReviewsInfo.region)];
            case 4:
                results = _a.sent();
                if (results.length > 0) {
                    res.json({ results: results, next: results[results.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no user reviews available');
                    return [2 /*return*/];
                }
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_4 = _a.sent();
                console.log('error at get user ratings', error_4);
                res.status(404).send('an error occurred while retrieving user ratings,try again');
                return [2 /*return*/];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getUserReviewsHandler = getUserReviewsHandler;
var addRecipeIntakeHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var addRecipeIntakeInfo, results, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                addRecipeIntakeInfo = req.body;
                if (!addRecipeIntakeInfo.recipeId) {
                    res.status(404).send('provide recipe id');
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, mysqlDB_js_1.addRecipeIntake)({ userId: req.userId, region: addRecipeIntakeInfo.region, recipeId: addRecipeIntakeInfo.recipeId })];
            case 2:
                results = _a.sent();
                res.json(__assign(__assign({}, results), { newTokens: req.newTokens }));
                return [2 /*return*/];
            case 3:
                error_5 = _a.sent();
                console.log('error at add recipe intake', error_5);
                res.status(404).send('an error occurred while adding recipe intake,try again');
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addRecipeIntakeHandler = addRecipeIntakeHandler;
var addFoodIntakeHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var addRecipeIntakeInfo, results, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                addRecipeIntakeInfo = req.body;
                if (!addRecipeIntakeInfo.recipeId) {
                    res.status(404).send('provide recipe id');
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, mysqlDB_js_1.addFoodIntake)({ userId: req.userId, foodId: addRecipeIntakeInfo.recipeId })];
            case 2:
                results = _a.sent();
                res.json(__assign(__assign({}, results), { newTokens: req.newTokens }));
                return [2 /*return*/];
            case 3:
                error_6 = _a.sent();
                console.log('error at add recipe intake', error_6);
                res.status(404).send('an error occurred while adding recipe intake,try again');
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addFoodIntakeHandler = addFoodIntakeHandler;
var getReviewsHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getReviewsInfo, reviews, reviews, reviews, reviews, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getReviewsInfo = req.body;
                if (!getReviewsInfo.recipeId) {
                    res.status(404).send('provide recipe id');
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 10, , 11]);
                if (!(getReviewsInfo.numberOfResults && getReviewsInfo.next)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, mysqlDB_js_1.findRecipeReviews)(getReviewsInfo.recipeId, getReviewsInfo.region, getReviewsInfo.numberOfResults, getReviewsInfo.next)];
            case 2:
                reviews = _a.sent();
                console.log(reviews);
                if (reviews.length > 0) {
                    res.json({ results: reviews, next: reviews[reviews.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no reviews available');
                    return [2 /*return*/];
                }
                return [3 /*break*/, 9];
            case 3:
                if (!(getReviewsInfo.numberOfResults && !getReviewsInfo.next)) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, mysqlDB_js_1.findRecipeReviews)(getReviewsInfo.recipeId, getReviewsInfo.region, getReviewsInfo.numberOfResults)];
            case 4:
                reviews = _a.sent();
                if (reviews.length > 0) {
                    res.json({ results: reviews, next: reviews[reviews.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no reviews available');
                    return [2 /*return*/];
                }
                return [3 /*break*/, 9];
            case 5:
                if (!(!getReviewsInfo.numberOfResults && getReviewsInfo.next)) return [3 /*break*/, 7];
                return [4 /*yield*/, (0, mysqlDB_js_1.findRecipeReviews)(getReviewsInfo.recipeId, getReviewsInfo.region, 5, getReviewsInfo.next)];
            case 6:
                reviews = _a.sent();
                if (reviews.length > 0) {
                    res.json({ results: reviews, next: reviews[reviews.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no reviews available');
                    return [2 /*return*/];
                }
                return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, (0, mysqlDB_js_1.findRecipeReviews)(getReviewsInfo.recipeId, getReviewsInfo.region, 5)];
            case 8:
                reviews = _a.sent();
                if (reviews.length > 0) {
                    res.json({ results: reviews, next: reviews[reviews.length - 1]['uuid'], newTokens: req.newTokens });
                    return [2 /*return*/];
                }
                else {
                    res.send('no reviews available');
                    return [2 /*return*/];
                }
                _a.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                error_7 = _a.sent();
                console.log('Error at retrieving reviews:', error_7);
                res.status(404).send('an error occurred while retrieving reviews,try again');
                return [2 /*return*/];
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.getReviewsHandler = getReviewsHandler;
var addRecipeReviewHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var addReviewInfo, review, addReviewResult, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                addReviewInfo = req.body;
                if (!(addReviewInfo.reviewText && addReviewInfo.recipeId)) {
                    res.status(404).send('provide review text and recipe id');
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                review = {
                    reviewText: addReviewInfo.reviewText,
                    recipeId: addReviewInfo.recipeId,
                    reviewerId: req.userId,
                    region: addReviewInfo.region
                };
                return [4 /*yield*/, (0, mysqlDB_js_1.addReview)(review)];
            case 2:
                addReviewResult = _a.sent();
                if (addReviewResult.task == 'not added') {
                    res.status(404).send('you already reviewed this recipe,want to update');
                    return [2 /*return*/];
                }
                res.json(__assign(__assign({}, addReviewResult), { newTokens: req.newTokens }));
                return [2 /*return*/];
            case 3:
                error_8 = _a.sent();
                console.log('Error at adding a review', error_8);
                res.status(404).send('an error occurred while adding review,try again');
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addRecipeReviewHandler = addRecipeReviewHandler;
var addRecipeRatingHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var addRatingInfo, rating, addRatingResult, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                addRatingInfo = req.body;
                if (!(addRatingInfo.ratingNumber && addRatingInfo.recipeId)) {
                    res.status(404).send('provide rating number and recipe id');
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                rating = {
                    ratingNumber: addRatingInfo.ratingNumber,
                    recipeId: addRatingInfo.recipeId,
                    raterId: req.userId,
                    region: addRatingInfo.region
                };
                return [4 /*yield*/, (0, mysqlDB_js_1.addRating)(rating)];
            case 2:
                addRatingResult = _a.sent();
                if (addRatingResult.task == 'not added') {
                    res.status(404).send('you already rated this recipe,want to update');
                    return [2 /*return*/];
                }
                res.json(__assign(__assign({}, addRatingResult), { newTokens: req.newTokens }));
                return [2 /*return*/];
            case 3:
                error_9 = _a.sent();
                console.log('Error at adding a rating:', error_9);
                res.status(404).send('an error occurred while adding a rating,try again');
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addRecipeRatingHandler = addRecipeRatingHandler;
var addUsernameForOauthHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var oauthAddusernameInfo, usernameAvailabilty, user, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                oauthAddusernameInfo = req.body;
                if (!oauthAddusernameInfo.username) {
                    res.status(404).send('provide username');
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, (0, mysqlDB_js_1.checkUsernameAvailability)(oauthAddusernameInfo.username)];
            case 2:
                usernameAvailabilty = _a.sent();
                if (!(usernameAvailabilty.status == 'unavailable')) return [3 /*break*/, 3];
                res.status(404).send("the username ".concat(oauthAddusernameInfo.username, " is already taken,choose another one"));
                return [2 /*return*/];
            case 3: return [4 /*yield*/, (0, mysqlDB_js_1.updateOauthUserUsername)(oauthAddusernameInfo.username, req.userId)];
            case 4:
                user = _a.sent();
                res.json(__assign(__assign({}, user), { newTokens: req.newTokens }));
                return [2 /*return*/];
            case 5: return [3 /*break*/, 7];
            case 6:
                error_10 = _a.sent();
                console.log('Error at addUsername:', error_10);
                res.status(404).send('an error occurred while adding username,try again');
                return [2 /*return*/];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.addUsernameForOauthHandler = addUsernameForOauthHandler;
var fetchPaginatedRecipesHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pageInfo, recipes, recipesResponse, recipes, recipesResponse, recipes, recipesResponse, recipes, recipesResponse, error_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pageInfo = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 10, , 11]);
                if (!(pageInfo.numberOfResults && pageInfo.next)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, mysqlDB_js_1.getPaginatedRecipes)(pageInfo.numberOfResults, pageInfo.region, pageInfo.next)];
            case 2:
                recipes = _a.sent();
                recipesResponse = {
                    results: recipes,
                    next: recipes[recipes.length - 1]['uuid'],
                    newTokens: req.newTokens
                };
                res.json(recipesResponse);
                return [2 /*return*/];
            case 3:
                if (!(!pageInfo.numberOfResults && pageInfo.next)) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, mysqlDB_js_1.getPaginatedRecipes)(5, pageInfo.region, pageInfo.next)];
            case 4:
                recipes = _a.sent();
                recipesResponse = {
                    results: recipes,
                    next: recipes[recipes.length - 1]['uuid'],
                    newTokens: req.newTokens
                };
                res.json(recipesResponse);
                return [2 /*return*/];
            case 5:
                if (!(pageInfo.numberOfResults && !pageInfo.next)) return [3 /*break*/, 7];
                return [4 /*yield*/, (0, mysqlDB_js_1.getPaginatedRecipes)(pageInfo.numberOfResults, pageInfo.region)];
            case 6:
                recipes = _a.sent();
                recipesResponse = {
                    results: recipes,
                    next: recipes[recipes.length - 1]['uuid'],
                    newTokens: req.newTokens
                };
                res.json(recipesResponse);
                return [2 /*return*/];
            case 7: return [4 /*yield*/, (0, mysqlDB_js_1.getPaginatedRecipes)(5, pageInfo.region)];
            case 8:
                recipes = _a.sent();
                recipesResponse = {
                    results: recipes,
                    next: recipes[recipes.length - 1]['uuid'],
                    newTokens: req.newTokens
                };
                res.json(recipesResponse);
                return [2 /*return*/];
            case 9: return [3 /*break*/, 11];
            case 10:
                error_11 = _a.sent();
                console.log(error_11);
                res.status(404).send('an errror occurred while retrieving recipes,try again');
                return [2 /*return*/];
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.fetchPaginatedRecipesHandler = fetchPaginatedRecipesHandler;
var loginRouteHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var loginInfo, possibleUser, hashedPassword, correctpassword, userInfo, userTokens, error_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                loginInfo = req.body;
                if (!(loginInfo.username && loginInfo.password)) {
                    res.status(404).send('provide all fields:username,password');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, mysqlDB_js_1.checkIfPasswordUserExists)(loginInfo.username)];
            case 1:
                possibleUser = _a.sent();
                if (possibleUser == null) {
                    res.status(404).send('no account with such username exists,register');
                    return [2 /*return*/];
                }
                hashedPassword = possibleUser['hashed_password'];
                return [4 /*yield*/, bcrypt.compare(loginInfo.password, hashedPassword)];
            case 2:
                correctpassword = _a.sent();
                if (!correctpassword) {
                    res.status(404).send('wrong password');
                    return [2 /*return*/];
                }
                userInfo = {
                    userId: possibleUser['userId'],
                    refreshTokenVersion: possibleUser['refreshTokenVersion'],
                };
                userTokens = (0, AuthTokens_js_1.createAuthTokens)(userInfo);
                res.json(userTokens);
                return [2 /*return*/];
            case 3:
                error_12 = _a.sent();
                console.log('error at login', error_12);
                res.status(404).send('an error occurred while logging in,try again');
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.loginRouteHandler = loginRouteHandler;
var registerRouteHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var registerInfo, possibleUser, hashedPassword, userObj, user, registeredUser, userTokens, error_13;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                registerInfo = req.body;
                if (!(registerInfo.username && registerInfo.email && registerInfo.password)) {
                    res.status(404).send('provide all fields:username,email,password');
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, (0, mysqlDB_js_1.checkUsernameAvailability)(registerInfo.username)];
            case 2:
                possibleUser = _a.sent();
                if (possibleUser.status == 'unavailable') {
                    res.status(404).send('username already taken,choose another username');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcrypt.hash(registerInfo.password, 10)];
            case 3:
                hashedPassword = _a.sent();
                userObj = {
                    username: registerInfo.username,
                    email: registerInfo.email,
                    password: hashedPassword
                };
                return [4 /*yield*/, (0, mysqlDB_js_1.registerPasswordUser)(userObj)];
            case 4:
                user = _a.sent();
                registeredUser = {
                    userId: user['userId'],
                    refreshTokenVersion: 0
                };
                userTokens = (0, AuthTokens_js_1.createAuthTokens)(registeredUser);
                res.json(userTokens);
                return [2 /*return*/];
            case 5:
                error_13 = _a.sent();
                console.log('error at register route:', error_13);
                res.status(404).send('an error occurred while registering,try again,');
                return [2 /*return*/];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.registerRouteHandler = registerRouteHandler;
var checkAuthentication = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var tokens, userData, refreshedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tokens = req.body;
                if (!(tokens.accessToken && tokens.refreshToken)) {
                    res.status(404).send('you have no access,log in or register');
                    return [2 /*return*/];
                }
                userData = (0, AuthTokens_js_1.checkAccessToken)(tokens.accessToken);
                console.log('user data:', userData);
                if (!(userData == 'unauthorized')) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, AuthTokens_js_1.checkRefreshToken)(tokens.refreshToken)];
            case 1:
                refreshedUser = _a.sent();
                if (refreshedUser == 'unauthorized') {
                    res.status(404).send('your credientials were revoked by principal account');
                    return [2 /*return*/];
                }
                else {
                    req.newTokens = refreshedUser.newTokens;
                    req.userId = refreshedUser.userId;
                    return [2 /*return*/, next()];
                }
                return [3 /*break*/, 3];
            case 2:
                req.userId = userData.userId;
                console.log(userData);
                return [2 /*return*/, next()];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.checkAuthentication = checkAuthentication;
