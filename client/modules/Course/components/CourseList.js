import React, { PropTypes } from 'react';

// Import Components
import CourseListItem from './CourseListItem/CourseListItem';

function CourseList(props) {
  return (
    <div className="listView">
      {
        props.courses.map(course => (
          <CourseListItem
            course={course}
            key={course.cuid}
            onDelete={() => props.handleDeleteCourse(course.cuid)}
          />
        ))
      }
    </div>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteCourse: PropTypes.func.isRequired,
};

export default CourseList;
