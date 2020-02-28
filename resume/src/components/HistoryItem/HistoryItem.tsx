import React from 'react';
import IHistory from '../../interfaces/IHistory';

const HistoryItem = ({ History, Subtitle }: IProps) => {
    return (
        <div>
            <h3>{History.Name}</h3>
            <span>{Subtitle}</span>
            <span>{History.Location}</span>
            <span>{History.StartDate.toLocaleDateString()}–{History.EndDate ? History.EndDate?.toLocaleDateString() : 'Present'}</span>
            <ul>
                {
                    History.Details.map(d => <li>{d}</li>)
                }
            </ul>
        </div>
    )
}

interface IProps {
    History: IHistory;
    Subtitle: String;
}

export default HistoryItem;