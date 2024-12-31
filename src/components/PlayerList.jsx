import { useNavigate } from "react-router-dom";

const PlayerList = ({ players }) => {
  const navigate = useNavigate();

  // Toggle the accordion for each player

  if (!players.length) {
    return (
      <p className="w-full p-4 text-center text-gray-400">
        No players found. Try searching.
      </p>
    );
  }

  return (
    <div className="w-full p-6 overflow-hidden h-full rounded-lg shadow-md">
      {/* Scrollable container with hidden scrollbar */}
      <div
        className="overflow-y-auto h-[calc(100vh-120px)]"
        style={{
          scrollbarWidth: "none" /* For Firefox */,
          msOverflowStyle: "none" /* For Internet Explorer and Edge */,
        }}
      >
        <ul className="space-y-6 justify-items-center ">
          {players.map((player) => (
            <>
              <li
                key={player.id}
                className="cursor-pointer p-3 px-6 w-8/12 bg-gray-800 hover:bg-gray-700 rounded-xl "
                onClick={() => navigate(`/players/${player.id}`)}
              >
                <div className="flex  justify-around w-full md:flex-row items-center gap-6 flex-col">
                  <h3 className="text-xl font-semibold text-white md:w-[30%]">
                    {player.firstName} {player.lastName}
                  </h3>
                  <div className="flex justify-between md:w-[40%] gap-4 text-sm text-gray-400">
                    <p>
                      <span className="font-medium text-white">Gender:</span>{" "}
                      {player.gender}
                    </p>
                    <p>
                      <span className="font-medium text-white">Weight:</span>{" "}
                      {player.weightClass}
                    </p>
                    <p>
                      <span className="font-medium text-white">Wins:</span>{" "}
                      {player.wins}
                    </p>
                    <p>
                      <span className="font-medium text-white">Losses:</span>{" "}
                      {player.losses}
                    </p>
                  </div>
                </div>
              </li>
              <li
                key={player.id}
                className="cursor-pointer p-3 px-6 w-8/12 bg-gray-800 hover:bg-gray-700 rounded-xl "
              >
                <div className="flex  justify-around w-full md:flex-row items-center gap-6 flex-col">
                  <h3 className="text-xl font-semibold text-white md:w-[30%]">
                    {player.firstName} {player.lastName}
                  </h3>
                  <div className="flex justify-between md:w-[40%] gap-4 text-sm text-gray-400">
                    <p>
                      <span className="font-medium text-white">Gender:</span>{" "}
                      {player.gender}
                    </p>
                    <p>
                      <span className="font-medium text-white">Weight:</span>{" "}
                      {player.weightClass}
                    </p>
                    <p>
                      <span className="font-medium text-white">Wins:</span>{" "}
                      {player.wins}
                    </p>
                    <p>
                      <span className="font-medium text-white">Losses:</span>{" "}
                      {player.losses}
                    </p>
                  </div>
                </div>
              </li>
            </>

            // <li
            //   key={player.id}
            //   className="cursor-pointer p-6 w-full bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 ease-in-out"
            // >
            //   {/* Player Name and Basic Info */}
            //   <div
            //     className="flex justify-between items-center gap-6 mb-4"
            //     onClick={() => handleToggleAccordion(player.id)}
            //   >
            //     <div className="flex w-full md:flex-row items-center gap-6 flex-col">
            //       <h3 className="text-xl font-semibold text-white md:w-[35%]">
            //         {player.firstName} {player.lastName}
            //       </h3>
            //       <div className="flex justify-between md:w-[30%] gap-4 text-sm text-gray-400">
            //         <p>
            //           <span className="font-medium text-white">Weight:</span>{" "}
            //           {player.weightClass}
            //         </p>
            //         <p>
            //           <span className="font-medium text-white">Wins:</span>{" "}
            //           {player.wins}
            //         </p>
            //         <p>
            //           <span className="font-medium text-white">Losses:</span>{" "}
            //           {player.losses}
            //         </p>
            //       </div>
            //     </div>
            //     {/* Arrow */}
            //     <div
            //       className={`transform transition-transform duration-300 ${
            //         expandedPlayerId === player.id ? "rotate-180" : "rotate-0"
            //       }`}
            //     >
            //       <svg
            //         xmlns="http://www.w3.org/2000/svg"
            //         className="w-5 h-5 text-gray-400"
            //         fill="none"
            //         viewBox="0 0 24 24"
            //         stroke="currentColor"
            //       >
            //         <path
            //           strokeLinecap="round"
            //           strokeLinejoin="round"
            //           strokeWidth="2"
            //           d="M19 9l-7 7-7-7"
            //         />
            //       </svg>
            //     </div>
            //   </div>

            //   {/* Accordion for Player Details */}
            //   {expandedPlayerId === player.id && (
            //     <div className="transition-all duration-300 ease-in-out mt-4 pl-6 space-y-3 text-gray-400">
            //       <p>
            //         <span className="font-medium text-white">Height:</span>{" "}
            //         {player.height}
            //       </p>
            //       <p>
            //         <span className="font-medium text-white">
            //           Date of Birth:
            //         </span>{" "}
            //         {player.dateofBirth}
            //       </p>
            //       <p>
            //         <span className="font-medium text-white">Birth Place:</span>{" "}
            //         {player.birthPlace}
            //       </p>
            //       <p>
            //         <span className="font-medium text-white">
            //           Number of Fights:
            //         </span>{" "}
            //         {player.numberofFights}
            //       </p>
            //       <p>
            //         <span className="font-medium text-white">Knockouts:</span>{" "}
            //         {player.numberofKnockouts}
            //       </p>
            //       <p>
            //         <span className="font-medium text-white">Club:</span>{" "}
            //         {player.club}
            //       </p>
            //       <p>
            //         <span className="font-medium text-white">Coach:</span>{" "}
            //         {player.coach}
            //       </p>
            //     </div>
            //   )}
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerList;
