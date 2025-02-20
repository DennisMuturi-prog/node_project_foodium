import passport from 'passport'
import  {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import { registerOauthUser } from "../sqlDB/mysqlDB.js";
import dotenv from 'dotenv'
import { error } from 'console';
dotenv.config()

const clientID = process.env.GOOGLE_CLIENT_ID || '';
const clientSecret = process.env.GOOGLE_CLIENT_SECRET|| '';

passport.use(new GoogleStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: "https://nodejsbackend-g0f5g7ddh0eqekff.southafricanorth-01.azurewebsites.net/auth/google/callback"
  },
  async (_accessToken, _refreshToken, profile, done) =>{
    if(profile.emails){
      const oauthUser={
        email:profile.emails[0].value,
        google_id:profile.id
      }
      //registerOauthuser has logic to check if a user exists already embedded in database
      const user=await registerOauthUser(oauthUser)
      console.log('log at oauth',user)
      return done(null,user)
    }
    else{
      console.log(profile)
      done(null)
    }
  }
  
));