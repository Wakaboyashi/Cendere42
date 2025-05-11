import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [leaderboardData, setLeaderboard] = useState([]);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const logout = () => {
        localStorage.setItem("isLoggedIn", "false");
        navigate("/");
    }
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("/api/home", {
            headers: {
              "X-Auth": localStorage.getItem("isLoggedIn") || "false"
            }
          });
      
          if (res.status === 401) {
            console.log("Yetkisiz erişim");
            return;
          }
      
          const data = await res.json();
          setUser(data.user);
          setLeaderboard(data.leaderboard);
        };
      
        fetchData();
      }, []);

    const userName = user.name;
    const userAvatar = user.avatar; // Placeholder image if avatar is not available
    const userScore = user.score || 0;

      if (!userName) {
        return (
           /* From Uiverse.io by clarencedion */ 
<div className="flex items-center justify-center min-h-screen">
  <div className="relative">
    <div className="relative w-32 h-32">
      <div
        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin"
        style={{ animationDuration: "3s" }}
      ></div>

      <div
        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
        style={{ animationDuration: "2s", animationDirection: "reverse" }}
      ></div>
    </div>

    <div
      className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"
    ></div>
  </div>
</div>

        );
      }
    return (
        
        <div className="w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-900 p-8 shadow-md shadow-zinc-800/50 text-white mx-auto mt-20">
            <h2 className="mb-6 text-center text-2xl font-bold">Home</h2>
            <div className="flex items-center mb-4">
                <img src={userAvatar}  className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h3 className="text-xl font-semibold">{userName}</h3>
                    <p className="text-sm text-gray-400">Score: {userScore}</p>
                </div>
            </div>
            <h3 className="text-lg font-semibold mb-4">Leaderboard</h3>
            <ul className="space-y-2">
                {leaderboardData.map((item, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.score}</span>
                    </li>
                ))}
            </ul>
            <button className="mt-4 w-full rounded bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-700"
                onClick={logout}>
                Logout
            </button>
        </div>
    );
};
export default Home;