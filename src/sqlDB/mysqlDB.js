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
exports.registerOauthUser = registerOauthUser;
exports.registerPasswordUser = registerPasswordUser;
exports.checkIfPasswordUserExists = checkIfPasswordUserExists;
exports.retrieveUser = retrieveUser;
exports.checkUsernameAvailability = checkUsernameAvailability;
exports.updateOauthUserUsername = updateOauthUserUsername;
exports.addRecipeIntake = addRecipeIntake;
exports.addFoodIntake = addFoodIntake;
exports.findUserReviews = findUserReviews;
exports.findUserRatings = findUserRatings;
exports.findRecipeReviews = findRecipeReviews;
exports.addReview = addReview;
exports.addRating = addRating;
exports.getPaginatedRecipes = getPaginatedRecipes;
exports.findUserRecipeIntake = findUserRecipeIntake;
exports.findUserFoodIntake = findUserFoodIntake;
var promise_1 = require("mysql2/promise");
var fs_1 = require("fs");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
// const dbconfig:PoolOptions =
// {
//     host: process.env.AZURE_HOSTNAME,
//     user: process.env.AZURE_USERNAME,
//     password: process.env.AZURE_PASSWWORD,
//     database: process.env.AZURE_DB,
//     port: 3306,
//     ssl: {ca: readFileSync("DigiCertGlobalRootCA.crt.pem")}
// };
var dbconfig = {
    host: 'foodium.mysql.database.azure.com',
    user: 'muturi',
    password: '3NZBFX7nzGyqLYW',
    database: 'new_foodium',
    port: 3306,
    ssl: { ca: (0, fs_1.readFileSync)("DigiCertGlobalRootCA.crt.pem") }
};
var connectionOptions = {
    hostname: process.env.AZURE_HOSTNAME,
    username: process.env.AZURE_USERNAME,
    password: process.env.AZURE_PASSWWORD,
    db: process.env.AZURE_DB,
    poolSize: 3,
    port: 3306,
    // tls: tlsConfig
};
// const conn = await mysql.createPool(config);(connectionOptions);
var connection = await (0, promise_1.createConnection)(dbconfig);
function registerOauthUser(registerRequest) {
    return __awaiter(this, void 0, void 0, function () {
        var results, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("CALL add_oauth_user(?,?)", [registerRequest.email, registerRequest.google_id])];
                case 1:
                    results = (_a.sent())[0];
                    user = results[0][0];
                    return [2 /*return*/, results];
            }
        });
    });
}
function registerPasswordUser(registerRequest) {
    return __awaiter(this, void 0, void 0, function () {
        var results, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("CALL add_password_user(?,?,?)", [registerRequest.username, registerRequest.email, registerRequest.password])];
                case 1:
                    results = (_a.sent())[0];
                    user = results[0][0];
                    return [2 /*return*/, results];
            }
        });
    });
}
function checkIfPasswordUserExists(username) {
    return __awaiter(this, void 0, void 0, function () {
        var results, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("CALL retrieve_password_user(?)", [username])];
                case 1:
                    results = (_a.sent())[0];
                    if (results[0].length == 0) {
                        return [2 /*return*/, null];
                    }
                    else {
                        user = results[0][0];
                        return [2 /*return*/, user];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function retrieveUser(id) {
    return __awaiter(this, void 0, void 0, function () {
        var results, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("CALL retrieve_user(?)", [id])];
                case 1:
                    results = (_a.sent())[0];
                    if (results && results[0] && results[0][0]) {
                        user = results[0][0];
                        return [2 /*return*/, user];
                    }
                    return [2 /*return*/, null];
            }
        });
    });
}
function checkUsernameAvailability(username) {
    return __awaiter(this, void 0, void 0, function () {
        var results, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("CALL check_username_availability(?)", [username])];
                case 1:
                    results = (_a.sent())[0];
                    user = results[0][0];
                    return [2 /*return*/, user];
            }
        });
    });
}
function updateOauthUserUsername(username, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("CALL update_oauthUser_username(?,?)", [username, userId])];
                case 1:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results];
            }
        });
    });
}
function addRecipeIntake(recipeIntake) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("CALL ".concat(recipeIntake.region == 'kenyan' ? 'add_kenyan_recipe_intake(?,?)' : 'add_recipe_intake(?,?)'), [recipeIntake.userId, recipeIntake.recipeId])];
                case 1:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results];
            }
        });
    });
}
function addFoodIntake(recipeIntake) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("CALL 'add_food_intake(?,?)", [recipeIntake.userId, recipeIntake.foodId])];
                case 1:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results];
            }
        });
    });
}
function findUserReviews(userId, region, next) {
    return __awaiter(this, void 0, void 0, function () {
        var results, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!next) return [3 /*break*/, 2];
                    return [4 /*yield*/, connection.query("CALL ".concat(region == 'kenyan' ? 'get_user_paginated_kenyan_recipe_reviews(?,?)' : 'get_user_paginated_reviews(?,?)'), [userId, next])];
                case 1:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results];
                case 2: return [4 /*yield*/, connection.query("CALL ".concat(region == 'kenyan' ? 'get_user_first_page_kenyan_recipe_reviews(?)' : 'get_user_first_page_reviews(?)'), [userId])];
                case 3:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results[0]];
            }
        });
    });
}
function findUserRatings(userId, region, next) {
    return __awaiter(this, void 0, void 0, function () {
        var results, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!next) return [3 /*break*/, 2];
                    return [4 /*yield*/, connection.query("CALL ".concat(region == 'kenyan' ? 'get_user_paginated_kenyan_recipe_ratings(?,?)' : 'get_user_paginated_ratings(?,?)'), [userId, next])];
                case 1:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results];
                case 2: return [4 /*yield*/, connection.query("CALL ".concat(region == 'kenyan' ? 'get_user_first_page_kenyan_recipe_ratings(?)' : 'get_user_first_page_ratings(?)'), [userId])];
                case 3:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results[0]];
            }
        });
    });
}
function findRecipeReviews(recipeId, region, number_of_results, next) {
    return __awaiter(this, void 0, void 0, function () {
        var results, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!next) return [3 /*break*/, 2];
                    return [4 /*yield*/, connection.query("CALL ".concat(region == 'kenyan' ? 'get_paginated_kenyan_recipe_reiews(?,?,?)' : 'get_paginated_reviews(?,?,?)'), [recipeId, number_of_results, next])];
                case 1:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results[0]];
                case 2: return [4 /*yield*/, connection.query("CALL ".concat(region == 'kenyan' ? 'get_first_page_kenyan_recipe_reviews(?,?)' : 'get_first_page_reviews(?,?)'), [recipeId, number_of_results])];
                case 3:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results[0]];
            }
        });
    });
}
function addReview(review) {
    return __awaiter(this, void 0, void 0, function () {
        var results, reviewStatus;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("CALL ".concat(review.region == 'kenyan' ? 'add_kenyan_recipe_review(?,?,?)' : 'add_recipe_review(?,?,?)'), [review.reviewText, review.recipeId, review.reviewerId])];
                case 1:
                    results = (_a.sent())[0];
                    reviewStatus = results[0][0];
                    return [2 /*return*/, reviewStatus];
            }
        });
    });
}
function addRating(rating) {
    return __awaiter(this, void 0, void 0, function () {
        var results, ratingStatus;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("CALL ".concat(rating.region == 'kenyan' ? 'add_kenyan_recipe_rating(?,?,?)' : 'add_recipe_rating(?,?,?)'), [rating.ratingNumber, rating.recipeId, rating.raterId])];
                case 1:
                    results = (_a.sent())[0];
                    ratingStatus = results[0][0];
                    return [2 /*return*/, ratingStatus];
            }
        });
    });
}
function parseRecipes(results) {
    var recipes = results.map(function (recipe) {
        return __assign(__assign({}, recipe), { ingredients: JSON.parse(recipe['ingredients']), directions: JSON.parse(recipe['directions']), NER: JSON.parse(recipe['NER']) });
    });
    return recipes;
}
function parseKenyanRecipes(results) {
    var recipes = results;
    recipes = recipes.map(function (recipe) {
        return __assign(__assign({}, recipe), { parsedIngredientsList: JSON.parse(recipe['parsedIngredientsList'].replace(/'/g, '"')) });
    });
    return recipes;
}
function getPaginatedRecipes(number_of_results, region, next) {
    return __awaiter(this, void 0, void 0, function () {
        var results, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!next) return [3 /*break*/, 2];
                    return [4 /*yield*/, connection.query("CALL ".concat(region == 'kenyan' ? 'get_paginated_kenyan_recipes(?,?)' : 'get_paginated_recipes(?,?)'), [next, number_of_results])];
                case 1:
                    results = (_a.sent())[0];
                    if (region == 'worldwide') {
                        return [2 /*return*/, parseRecipes(results[0])];
                    }
                    else {
                        return [2 /*return*/, parseKenyanRecipes(results[0])];
                    }
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, connection.query("CALL ".concat(region == 'kenyan' ? 'get_first_page_kenyan_recipes(?)' : 'get_first_page_recipes(?)'), [number_of_results])
                    // const results=await connection.query('select * from kenyan_recipes')
                ];
                case 3:
                    results = (_a.sent())[0];
                    // const results=await connection.query('select * from kenyan_recipes')
                    if (region == 'worldwide') {
                        return [2 /*return*/, parseRecipes(results[0])];
                    }
                    else {
                        return [2 /*return*/, parseKenyanRecipes(results[0])];
                    }
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
// const result=await getPaginatedRecipes(5,'kenyan')
// console.log('results..',result)
function findUserRecipeIntake(userId, region, next) {
    return __awaiter(this, void 0, void 0, function () {
        var results, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!next) return [3 /*break*/, 2];
                    return [4 /*yield*/, connection.query("CALL ".concat(region == 'kenyan' ? 'get_user_paginated_kenyan_recipe_intake(?,?)' : 'get_user_paginated_recipe_intake(?,?)'), [userId, next])];
                case 1:
                    results = (_a.sent())[0];
                    if (region == 'worldwide') {
                        return [2 /*return*/, parseRecipes(results[0])];
                    }
                    else {
                        return [2 /*return*/, parseKenyanRecipes(results[0])];
                    }
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, connection.query("CALL ".concat(region == 'kenyan' ? 'get_user_first_page_kenyan_recipe_intake(?)' : 'get_user_first_page_recipe_intake(?)'), [userId])];
                case 3:
                    results = (_a.sent())[0];
                    if (region == 'worldwide') {
                        return [2 /*return*/, parseRecipes(results[0])];
                    }
                    else {
                        return [2 /*return*/, parseKenyanRecipes(results[0])];
                    }
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function findUserFoodIntake(userId, next) {
    return __awaiter(this, void 0, void 0, function () {
        var results, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!next) return [3 /*break*/, 2];
                    return [4 /*yield*/, connection.query("CALL get_user_paginated_food_intake(?,?)", [userId, next])];
                case 1:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results[0]];
                case 2: return [4 /*yield*/, connection.query("CALL get_user_first_page_food_intake(?)", [userId])];
                case 3:
                    results = (_a.sent())[0];
                    return [2 /*return*/, results[0]];
            }
        });
    });
}
