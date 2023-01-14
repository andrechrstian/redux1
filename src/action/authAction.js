export const handleAuth = (isLogin) => (dispatch) => {
    let newIsLogin = !isLogin;

    dispatch({
        type : "AUTH",
        payload : newIsLogin
    })

  }