export const LoginStart = (userCrendtials) => ({
   type:"LOGIN_START"
})


export const LoginSuccess = (user) => ({
   type:"LOGIN_SUCCESS",
   payload: user,
})


export const LoginFailure = () => ({
   type:"LOGIN_FAILURE"
});


export const Logout = () => ({
   type:"LOGOUT",
})

export const UpdateStart = (userCrendtials) => ({
  type: "UPADATE_START",
});

export const UpdateSuccess = (user) => ({
  type: "UPADATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPADATE_FAILURE",
});