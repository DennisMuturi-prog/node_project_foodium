import jwt from 'jsonwebtoken';
import { retrieveUser } from "../sqlDB/mysqlDB.js";
// import dotenv from 'dotenv'
// dotenv.config()
export type RefreshTokenData = {
    userId: string;
    refreshTokenVersion?: number;
};
  
export type AccessTokenData = {
userId: string;
};
export const createAuthTokens = (
    user: {userId:string,refreshTokenVersion:number}
  ): { refreshToken: string; accessToken: string } => {
    const refreshToken = jwt.sign(
      { userId: user.userId, refreshTokenVersion: user.refreshTokenVersion },
      process.env.REFRESH_TOKEN_SECRET!,
      {
        expiresIn: "30d",
      }
    );
  
    const accessToken = jwt.sign(
      { userId: user.userId },
      process.env.ACCESS_TOKEN_SECRET!,
      {
        expiresIn: "15min",
      }
    );
  
    return { refreshToken, accessToken };
  };
export const checkAccessToken=(accessToken:string)=>{
try {
    const data = <AccessTokenData>(
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!)
        );
        // get userId from token data
        return {
        userId: data.userId,
        };

    
} catch {
    return 'unauthorized'
    
}


}
export const checkRefreshToken=async (refreshToken:string)=>{
    let data;
    try {
    data = <RefreshTokenData>(
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!)
    );
    } catch {
        return 'unauthorized';
    }

    // 2. get user
    let user = await retrieveUser(data.userId)
    
    // 3.check refresh token version
    if (!user || user.refreshTokenVersion !== data.refreshTokenVersion) {
    return 'unauthorized'
    }
    const newTokens=createAuthTokens({...user,userId:data.userId})
    return {
    userId: data.userId,
    newTokens,
    };
}
