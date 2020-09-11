import React from 'react';
import SectionIcon from './SectionIcon';
import "./index.css";
import SectionHeader from './SectionHeader';

interface DropdownOption {
    to: string;
    text: string;
}

interface Props {
    gridArea: string,
    id: string,
    name: string,
    icon: SectionIcon,
    options: DropdownOption[]
}

const Section : React.SFC<Props> = (props) => {
    return (
        <section style={{gridArea: props.gridArea}} id={props.id} className="grid-section">
            <SectionHeader 
                options={props.options} 
                name={props.name} 
                icon={props.icon} />
            {props.children}
        </section>
    );
}

export default Section;