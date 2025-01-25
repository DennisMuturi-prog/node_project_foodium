import passport from 'passport'
import  {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import { registerOauthUser } from "../sqlDB/mysqlDB.js";
import dotenv from 'dotenv'
dotenv.config()

const clientID = process.env.GOOGLE_CLIENT_ID || '';
const clientSecret = process.env.GOOGLE_CLIENT_SECRET|| '';
console.log(clientID)

passport.use(new GoogleStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  async function(_accessToken, _refreshToken, profile, done) {
    try {
      if(profile.emails){
        const oauthUser={
          email:profile.emails[0].value,
          google_id:profile.id
        }
        //registerOauthuser has logic to check if a user exists already embedded in database
        const user=await registerOauthUser(oauthUser)
        console.log(user)
        return done(null,user)
      }
      
    } catch (error) {
      console.log('error at oauth',error)
      done(error)
      
    }

  }
  
));