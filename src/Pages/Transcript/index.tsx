import React from "react";
import Grid from "../../Layout/Grid";
import "./index.css";
import Section from "../../Layout/Section";
import SectionIcon from "../../Layout/Section/SectionIcon";

const Transcript : React.SFC<{}> = () => {
    return (
        <Grid id="transcript-grid">
            <Section
                gridArea="my-information"
                options={[]}
                name="My Information"
                icon={SectionIcon.Today}
                id="my-information-section">
                    
            </Section>
            <Section
                gridArea="documents"
                options={[]}
                name="Documents"
                icon={SectionIcon.Announcements}
                id="documents-section">
                    
            </Section>
            <Section
                gridArea="transcripts"
                options={[]}
                name="Transcripts"
                icon={SectionIcon.Courses}
                id="transcript-section">
                    
            </Section>
        </Grid>
    )
}

export default Transcript