import React from "react";
import TeamCard from "../Team-Card"

const TeamResultsContainer = (props) =>{

    return(
        <span>
            {props.teamsArr.map((team)=>{

            console.log(team)
            return <TeamCard
            owner = {team.owner}
            region = {team.region}
            image = {team.image}
            teamName = {team.teamName}
            goal = {team.goal}
            about = {team.preferredRole}
            range1 = {team.range1}
            range2 = {team.range2}
            
            />
            })
        }
        </span>
        
    )

}

export default TeamResultsContainer;