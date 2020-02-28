import React from 'react';
import IEducation from '../../interfaces/IEducation';
import HistoryItem from '../HistoryItem';

const EducationHistoryItem = (EducationDetails: IEducation) => {
    return (
        <HistoryItem Subtitle={`${EducationDetails.Subject} - ${EducationDetails.Grade}`} History={EducationDetails}></HistoryItem>
    )
}

export default EducationHistoryItem;