import React from "react";
import TeamCard from "../Team-Card"

const TeamResultsContainer = (props) =>{

    return(
        <span>
            {props.teamsArr.map((team)=>{

            console.log(team)
            return <TeamCard
            sr //= {team.battleTag.name + "#" + team.battleTag.number}
            region //= {team.rank}
            language //= {team.teamIcon}
            teamName //= {team.rankIcon}
            description // = {team.preferredRole}
            // level = {team.level}
            // endorsement = {team.endorsementLvl}
            // gamesWon = {team.gamesWon}
            // email = {team.email}
            // hero1 = {team.preferredHeroes.hero1? team.preferredHeroes.hero1 :"N/A"}
            // hero2 = {team.preferredHeroes.hero2? team.preferredHeroes.hero2 :"N/A"}
            // hero3 = {team.preferredHeroes.hero3? team.preferredHeroes.hero3 :"N/A"}
            />
            })
        }
        </span>
        
    )

}

export default TeamResultsContainer;