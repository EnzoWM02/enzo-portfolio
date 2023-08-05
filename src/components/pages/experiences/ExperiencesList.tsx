import { TimelineSectionData } from 'src/components/ui/timeline/Timeline.tsx';

enum ProfessionalExperiences {
  FullStackDevBimachine = 'fullStackDevBimachine',
  TechnicalSupportBimachine = 'technicalSupportBimachine',
}

export const ProfessionalExperiencesList: TimelineSectionData[] = Object.values(
  ProfessionalExperiences
).map((item) => {
  return {
    date: `experiences.professional.${item}.date`,
    company: `experiences.professional.${item}.company`,
    title: `experiences.professional.${item}.title`,
    description: `experiences.professional.${item}.description`,
  };
});

enum FormationExperiences {
  SoftwareEngineer = 'softwareEngineer',
  Fisk = 'fisk',
  BomJesus = 'bomJesus',
}

export const FormationExperiencesList: TimelineSectionData[] = Object.values(
  FormationExperiences
).map((item) => {
  return {
    date: `experiences.formation.${item}.date`,
    company: `experiences.formation.${item}.company`,
    title: `experiences.formation.${item}.title`,
    description: `experiences.formation.${item}.description`,
  };
});