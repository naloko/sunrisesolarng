import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../AnimatedSection';
import ProjectCard from './ProjectCard';
const ProjectsSection = () => {
  const {
    t
  } = useTranslation();
  const projects = [{
    image: "/lovable-uploads/e57d9db3-f338-45c5-a13c-7af899f30aef.png",
    categoryKey: "projects.categories.commercial",
    titleKey: "projects.shandongTech.title",
    descriptionKey: "projects.shandongTech.description",
    link: "/projects/shandong-tech"
  }, {
    image: "/lovable-uploads/16a900b0-37ae-4d86-8f79-9ef056bf79ad.png",
    categoryKey: "projects.categories.commercial",
    titleKey: "projects.shandongCompany.title",
    descriptionKey: "projects.shandongCompany.description",
    link: "/projects/shandong-company"
  }, {
    image: "/lovable-uploads/c3e0eee9-c6ed-4e21-9b0c-b955d7683c1f.png",
    categoryKey: "projects.categories.commercial",
    titleKey: "projects.shandongZeyu.title",
    descriptionKey: "projects.shandongZeyu.description",
    link: "/projects/shandong-zeyu"
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            
            <h2 className="section-heading text-yellow-500">{t('sections.projects.title')}</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              {t('sections.projects.description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <AnimatedSection key={index} animation="scale-in" delay={(index + 1) * 100}>
              <ProjectCard image={project.image} categoryKey={project.categoryKey} titleKey={project.titleKey} descriptionKey={project.descriptionKey} link={project.link} />
            </AnimatedSection>)}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-primary/90">
            {t('sections.projects.viewAll')} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;