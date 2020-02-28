import React from "react";
import IEmploymentDetails from "../../interfaces/IEmplyomentDetails";
import HistoryItem from "../HistoryItem";

const EmploymentHistoryItem = (EmploymentDetails: IEmploymentDetails) => {
    return (
        <HistoryItem History={EmploymentDetails} Subtitle={EmploymentDetails.Position}></HistoryItem>
    )

}


export default EmploymentHistoryItem