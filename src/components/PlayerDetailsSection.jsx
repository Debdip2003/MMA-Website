import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { playerDb } from "../utils/firebase";
import SearchBar from "./SearchBar";
import PlayerList from "./PlayerList";

const PlayerDetailsSection = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchPlayers = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(
          collection(playerDb, "player-details")
        );
        const playerData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          nickName: doc.data().nickName,
          picture: doc.data().picture,
          weightClass: doc.data().weightClass,
          height: doc.data().height,
          reach: doc.data().reach,
          birthPlace: doc.data().birthPlace,
          club: doc.data().club,
          coach: doc.data().coach,
          dateofBirth: doc.data().dateofBirth,
          numberofFights: doc.data().numberofFights,
          numberofKnockouts: doc.data().numberofKnockouts,
          weight: doc.data().weight,
          wins: doc.data().wins,
          losses: doc.data().losses,
        }));
        setPlayers(playerData);
      } catch (error) {
        console.error("Error fetching players:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  // Filter players based on search term
  const filteredPlayers = players.filter((player) => {
    const firstName = player.firstName || "";
    const lastName = player.lastName || "";

    return (
      firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <SearchBar onSearch={setSearchTerm} />
      <div className="flex flex-col md:flex-row flex-grow gap-6 p-6">
        {isLoading ? (
          <p className="w-full text-center">Loading...</p>
        ) : (
          <PlayerList players={filteredPlayers} />
        )}
      </div>
    </div>
  );
};

export default PlayerDetailsSection;
