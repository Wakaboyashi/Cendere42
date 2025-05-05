import { useEffect } from 'react';
import '../../index.css'
import { useNavigate } from "react-router-dom";
import { doLogin } from '../../contexts/auth/login';

  
  function Login() {
    const navigate = useNavigate();
   if (localStorage.getItem("isLoggedIn") === null) {
      localStorage.setItem("isLoggedIn", "false");
    }

    useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn === "true") {
        navigate("/home", { replace: true });
      }
    }
    , []);

    const handleLogin = async () => {
    const nickname:string = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;

      if (!nickname || !password) {
        alert("Please enter both nickname and password.");
        return;
      }
      console.log(nickname, password)
      const res = await doLogin(nickname, password);
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
      }
      else {
        alert("Login failed. Please check your credentials.");
      }
    };

    const handleSign = () => {
      // Handle sign-up logic here
      navigate("/signup"); // Navigate to the sign-up page
    };

    return (
          <div
            className="flex flex-col justify-center items-center bg-zinc-950 h-max min-h-[100vh] pb-5"
          >
            <div
              className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6"
            >
              <div
                className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]"
              >
                <h2 className="text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight font-sans">FT_TRANSCENDENCE</h2>
                <p className="text-[32px] font-bold text-white">Sign In</p>
                <p className="mb-2.5 mt-2.5 font-normal text-zinc-400">
                  Enter your nickname and password to sign in!
                </p>
                <div className="mt-8">
                  <form className="pb-2">
                    <input type="hidden" name="provider" value="google" /><button
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 bg-none hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-white py-6"
                      type="submit"
                    >
                      <span className="mr-2"
                        ><svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          version="1.1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 48 48"
                          enableBackground="new 0 0 48 48"
                          className="h-5 w-5"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
      c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
      c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                          <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
      C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          ></path>
                          <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
      c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          ></path>
                          <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
      c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path></svg></span>
                          <span>Google</span>
                    </button>
                  </form> 
                </div>
                <div className="relative my-4">
                  <div className="relative flex items-center py-1">
                    <div className="grow border-t border-zinc-800"></div>
                    <div className="grow border-t border-zinc-800"></div>
                  </div>
                </div>
                <div>
                  <form noValidate className="mb-4">
                    <div className="grid gap-2">
                      <div className="grid gap-1">
                        <label className="text-white" htmlFor="nickname">Nickname</label>
                        <input
                          className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                          id="nickname"
                          placeholder="nickname"
                          type="nickname"
                          autoCapitalize="none"
                          autoComplete="nickname"
                          autoCorrect="off"
                          name="nickname"
                        /><label
                          className="text-zinc-950 mt-2 dark:text-white"
                          htmlFor="password"
                          >Password</label>
                          <input
                          id="password"
                          placeholder="Password"
                          type="password"
                          autoComplete="current-password"
                          className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                          name="password"
                        />
                      </div>
                      <button
                        className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-white/90 active:bg-white/80 flex w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium"
                        onClick={handleLogin}
                        type="button"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                  <p>
                    <a
                      className="font-medium text-white text-sm hover:cursor-pointer"
                      >Forgot your password?</a>
                  </p>
                  <p>
                    <a
                      onClick={handleSign}
                      type='button'
                      className="font-medium text-white text-sm hover:cursor-pointer"
                      >Don't have an account? Sign up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
);};

export default Login;