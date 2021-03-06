import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_COURSE = 'ADD_COURSE';
export const ADD_COURSES = 'ADD_COURSES';
export const DELETE_COURSE = 'DELETE_COURSE';

// Export Actions
export function addCourse(course) {
  return {
    type: ADD_COURSE,
    course,
  };
}

export function addCourseRequest(course) {
  return (dispatch) => {
    console.log(course);
    return callApi('courses', 'post', {
      course: {
        name: course.name,
        subtitle: course.subtitle,
        description: course.description,
        price: course.price,
        duration: course.duration,
      },
    }).then(res => dispatch(addCourse(res.course)));
  };
}

export function addCourses(courses) {
  return {
    type: ADD_COURSES,
    courses,
  };
}

export function fetchCourses() {
  console.log('fetchCourses');
  return (dispatch) => {
    return callApi('courses').then(res => {
      dispatch(addCourses(res.courses));
    });
  };
}

export function fetchCourse(cuid) {
  return (dispatch) => {
    return callApi(`courses/${cuid}`).then(res => dispatch(addCourse(res.course)));
  };
}

export function deleteCourse(cuid) {
  return {
    type: DELETE_COURSE,
    cuid,
  };
}

export function deleteCourseRequest(cuid) {
  return (dispatch) => {
    return callApi(`courses/${cuid}`, 'delete').then(() => dispatch(deleteCourse(cuid)));
  };
}
