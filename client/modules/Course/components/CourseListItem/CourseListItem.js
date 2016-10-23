import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './CourseListItem.css';

function CourseListItem(props) {
  return (
    <div className={styles['single-course']}>
      <h3 className={styles['course-name']}>
        <Link to={`/courses/${props.course.slug}-${props.course.cuid}`} >
          {props.course.name}
        </Link>
      </h3>
      <p className={styles['course-subtitle']}><FormattedMessage id="by" /> {props.course.subtitle}</p>
      <p className={styles['course-desc']}>{props.course.description}</p>
      <p className={styles['course-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteCourse" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

CourseListItem.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CourseListItem;
