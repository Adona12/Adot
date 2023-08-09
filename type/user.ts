export type UserResponse = {
    statusCode : string;
    message:string,
    user:User
    tokens : {
      accessToken:string,
      refreshToken:string
    };
  }
  export type User= {
    
      _id:string
    
  }
  export type UserProfile ={
    statusCode: string,
    message: string,
    data: {
      firstName: string,
      lastName: string,
      phone: string,
      email:string,
      profilePic: string,
      role:string
    }
  }