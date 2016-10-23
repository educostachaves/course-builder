import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/CourseListItem/CourseListItem.css';

// Import Actions
import { fetchCourse } from '../../CourseActions';

// Import Selectors
import { getCourse } from '../../CourseReducer';

export function CourseDetailPage(props) {
  return (
    <div>
      <Helmet title={props.course.name} />
      <div className={`${styles['single-course']} ${styles['course-detail']}`}>
        <h3 className={styles['course-name']}>{props.course.name}</h3>
        <p className={styles['course-subtitle']}><FormattedMessage id="by" /> {props.course.subtitle}</p>
        <p className={styles['course-desc']}>{props.course.description}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
CourseDetailPage.need = [params => {
  return fetchCourse(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    course: getCourse(state, props.params.cuid),
  };
}

CourseDetailPage.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(CourseDetailPage);
