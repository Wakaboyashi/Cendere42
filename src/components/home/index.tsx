import { useEffect, useState } from "react";

const Home = () => {
    const [leaderboardData, setLeaderboard] = useState([]);
    const [user, setUser] = useState({});
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

    const userName = user.name || "Loading...";
    const userAvatar = user.avatar; // Placeholder image if avatar is not available
    const userScore = user.score || 0;

      console.log(userName, userAvatar, userScore)
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
        </div>
    );
    }

export default Home;

function setUser(user: any) {
    throw new Error("Function not implemented.");
}
