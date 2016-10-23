import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_COURSE = 'ADD_COURSE';
export const ADD_COURSES = 'ADD_COURSES';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function addCourse(course) {
  return {
    type: ADD_COURSE,
    course,
  };
}

export function addCourseRequest(course) {
  return (dispatch) => {
    return callApi('courses', 'post', {
      course: {
        name: course.name,
        subtitile: course.subtitle,
        description: course.description,
        price: course.price,
        duration: course.duration,
      },
    }).then(res => dispatch(addCourse(res.course)));
  };
}

export function addCourses(courses) {
  return {
    type: ADD_COURSE,
    courses,
  };
}

export function fetchCourses() {
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