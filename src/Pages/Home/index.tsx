import React from "react";
import Grid from "../../Layout/Grid";
import "./index.css";
import Section from "../../Layout/Section";
import SectionIcon from "../../Layout/Section/SectionIcon";

const Home : React.SFC<{}> = () => {
    return (
        <Grid id="home-grid">
            <Section
                gridArea="today"
                options={[]}
                name="Today"
                icon={SectionIcon.Today}
                id="today-section">
                    
            </Section>
            <Section
                gridArea="announcements"
                options={[]}
                name="Announcements"
                icon={SectionIcon.Announcements}
                id="announcements-section">
                    
            </Section>
            <Section
                gridArea="courses"
                options={[]}
                name="Courses"
                icon={SectionIcon.Courses}
                id="courses-section">
                    
            </Section>
        </Grid>
    )
}

export default Home