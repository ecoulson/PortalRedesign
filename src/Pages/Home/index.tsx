import React from "react";
import Grid from "../../Layout/Grid";
import "./index.css";
import Section from "../../Layout/Section";
import SectionIcon from "../../Layout/Section/SectionIcon";
import CourseCard from "../../Components/CourseCard";
import CourseType from "../../Components/CourseCard/CourseType";

const Home : React.SFC<{}> = () => {
    return (
        <Grid id="home-grid">
            <Section
                gridArea="today"
                options={[]}
                name="Today"
                icon={SectionIcon.Today}
                id="today-section">
                <CourseCard 
                    name="Data Structure / Program Development" 
                    time="12:30pm - 2:30pm"
                    courseType={CourseType.ComputerScience}/>
                    
                <CourseCard 
                    name="Engineering Systems" 
                    time="8:40am - 9:40am"
                    courseType={CourseType.Engineering}/>
                   
                <CourseCard 
                    name="Electromagnetic Theory and Optics" 
                    time="9:15am - 10:30am"
                    courseType={CourseType.Physics}/>
                    
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