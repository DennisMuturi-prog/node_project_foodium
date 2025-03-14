
import express from 'express'
import passport from 'passport'
import './auth/auth.js'
import { createAuthTokens } from "./auth/AuthTokens.js";
import { addFoodIntakeHandler, addRecipeIntakeHandler, addRecipeRatingHandler, addRecipeReviewHandler, addUsernameForOauthHandler, checkAuthentication, getReviewsHandler, getUserFoodIntakeHandler, getUserRatingsHandler, getUserRecipeIntakeHandler, getUserReviewsHandler, loginRouteHandler, registerRouteHandler,fetchPaginatedRecipesHandler, searchRecipesHandler, searchFoodsHandler, fetchRecipesByDietTypeHandler,addUserPreferenceHandler,updateUserPreferenceHandler, reviewsStreamHandler } from "./RouteHandlers/routesHandler.js";
import dotenv from 'dotenv'
dotenv.config()

const app=express()
app.use(express.urlencoded({extended:false,limit: '50mb'}));
app.use(express.json({ limit: '50mb' }));
app.use(passport.initialize())
app.get('/',(req,res)=>{
  res.send('hello, world!')
  return
})
app.get(
  '/auth/google',
  passport.authenticate('google',{session:false,scope:['email','profile']})
)
app.get(
  '/auth/google/callback',
  (req,res)=>{
    passport.authenticate('google',{session:false},
      (err,user,_info,_status)=>{
        if(err){
          console.log('error at:',err)
          res.redirect('/failure')
          return
        }
        if(user){
          const authTokens=createAuthTokens(user)
          res.redirect(`foodiumapp://oauth?accessToken=${authTokens.accessToken}&refreshToken=${authTokens.refreshToken}`);
          return
        }
        res.redirect('/failure')
        return
    
      }
    )(req, res)
  }
)
app.post('/protected',checkAuthentication,(req,res)=>{
  if(req.newTokens){
    res.json({id:req.userId,newTokens:req.newTokens})
    return
  }
  res.json({id:req.userId})
  return
})
app.post('/register',registerRouteHandler)
app.post('/login',loginRouteHandler)
app.post('/getRecipes',checkAuthentication,fetchPaginatedRecipesHandler)
app.post('/getRecipesByDietType',checkAuthentication,fetchRecipesByDietTypeHandler)
app.post('/addUsername',checkAuthentication,addUsernameForOauthHandler)
app.post('/addReview',checkAuthentication,addRecipeReviewHandler)
app.post('/addRating',checkAuthentication,addRecipeRatingHandler)
app.post('/getRecipeReviews',checkAuthentication,getReviewsHandler)
app.post('/addRecipeIntake',checkAuthentication,addRecipeIntakeHandler)
app.post('/addFoodIntake',checkAuthentication,addFoodIntakeHandler)
app.post('/getUserReviews',checkAuthentication,getUserReviewsHandler)
app.post('/getUserRatings',checkAuthentication,getUserRatingsHandler)
app.post('/getUserRecipeIntake',checkAuthentication,getUserRecipeIntakeHandler)
app.post('/getUserFoodIntake',checkAuthentication,getUserFoodIntakeHandler)
app.post('/searchRecipes',checkAuthentication,searchRecipesHandler)
app.post('/searchFoods',checkAuthentication,searchFoodsHandler)
app.post('/addUserPreference', checkAuthentication, addUserPreferenceHandler);
app.post('/updateUserPreference', checkAuthentication, updateUserPreferenceHandler);
app.get('/reviewsEvent',reviewsStreamHandler)


app.get('/failure', (_req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Failure</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f8d7da;
          color: #721c24;
          text-align: center;
          padding: 50px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #f5c6cb;
          border-radius: 5px;
          background-color: #f8d7da;
        }
        h1 {
          font-size: 2em;
        }
        p {
          font-size: 1.2em;
        }
        a {
          color: #721c24;
          text-decoration: none;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Authentication Failed</h1>
        <p>Sorry, we couldn't authenticate your request. Please try again.</p>
        <p><a href="/">Go back to the homepage</a></p>
      </div>
    </body>
    </html>
  `);
});

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>console.log('running'))
