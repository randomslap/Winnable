import React from "react";
import PlayerCard from "../Player-Card"

const PlayerResultsContainer = (props) =>{

    return(
        <span>
            {props.usersArr.map((user)=>{

            console.log(user)
            return <PlayerCard
            name = {user.battleTag.name + "#" + user.battleTag.number}
            rank = {user.rank}
            userIcon = {user.userIcon}
            rankIcon = {user.rankIcon}
            role = {user.preferredRole}
            level = {user.level}
            endorsement = {user.endorsementLvl}
            gamesWon = {user.gamesWon}
            email = {user.email}
            hero1 = {user.preferredHeroes.hero1? user.preferredHeroes.hero1 :"N/A"}
            hero2 = {user.preferredHeroes.hero2? user.preferredHeroes.hero2 :"N/A"}
            hero3 = {user.preferredHeroes.hero3? user.preferredHeroes.hero3 :"N/A"}
            />
            })
        }
        </span>
        
    )

}

export default PlayerResultsContainer;