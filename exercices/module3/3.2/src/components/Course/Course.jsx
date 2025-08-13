import Header from "../Header/Header";
import Content from "../Content/Content";

const Course = ({ course }) => {
  /**
   * Ou alors on peut utiliser :
   * const { name: courseName, parts: courseParts } = course;
   * et ensuite appeler seulement courseName et courseParts
   * au lieu de course.name et course.parts
   */
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
