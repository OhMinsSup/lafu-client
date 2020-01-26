import React from 'react';
import styled from 'styled-components';
import DailyItemColumn from './DailyItemColumn';

const DailyItemTableBlock = styled.div`
    display: flex;
    margin-top: 2rem;
`;

interface DailyItemTableProps {}

const DailyItemTable: React.FC<DailyItemTableProps> = () => {
    return (
        <DailyItemTableBlock>
            <DailyItemColumn />
            <DailyItemColumn />
            <DailyItemColumn />
            <DailyItemColumn />
            <DailyItemColumn />
            <DailyItemColumn />
            <DailyItemColumn />
        </DailyItemTableBlock>
    )
}

export default DailyItemTable;
