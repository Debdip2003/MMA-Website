import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { maindb } from "../utils/firebase";
import playerImg from "../assests/player.jpg";

const PlayerPersonalDetails = () => {
  const params = useParams();
  console.log(params);

  const [playerDetails, setPlayerDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      setIsLoading(true);
      const docRef = doc(maindb, "player-details", params.id);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      setPlayerDetails(docSnap.data());
      setIsLoading(false);
    };

    fetchPlayerDetails();
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <p className="w-full text-center bg-black">Loading...</p>
      ) : (
        <div className="flex justify-between p-8 gap-6 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
          <img
            src={playerDetails.image}
            alt=""
            className="aspect-auto h-4/6 mx-auto"
          />
          <div className="flex flex-col items-start w-1/2 space-y-3">
            <p className="text-5xl capitalize font-bold">
              {playerDetails.firstName} {playerDetails.lastName}
            </p>
            <p className="">
              {" "}
              <strong> NICK NAME:</strong> {playerDetails.nickName}
            </p>
            <p className="">
              {" "}
              <strong> FIGHT RECORD: </strong> {playerDetails.wins}-
              {playerDetails.losses}-{playerDetails.draws}
            </p>
            <p className="">
              {" "}
              <strong> COACH: </strong>
              {playerDetails.coach}
            </p>
            <p className="">
              {" "}
              <strong> CLUB: </strong>
              {playerDetails.club}
            </p>

            <p className="">
              {" "}
              <strong> BIRTH PLACE: </strong>
              {playerDetails.birthPlace}
            </p>
            {/* <p className="">DATE OF BIRTH: {playerDetails.lastName}</p> */}
            <p className="">
              {" "}
              <strong> HEIGHT: </strong>
              {playerDetails.height}
            </p>
            <p className="">
              {" "}
              <strong> WEIGHT: </strong>
              {playerDetails.weight}
            </p>
            {/* <p className="">
              {" "}
              <strong> WINS: </strong>
              {playerDetails.wins}
            </p> */}
            {/* <p className="">
              {" "}
              <strong> LOSS: </strong>
              {playerDetails.losses}
            </p> */}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PlayerPersonalDetails;
