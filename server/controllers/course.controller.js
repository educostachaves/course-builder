import Course from '../models/course';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Courses
 * @param req
 * @param res
 * @returns void
 */
export function getCourses(req, res) {
  Course.find().sort('-dateAdded').exec((err, courses) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ courses });
  });
}

/**
 * Save a Course
 * @param req
 * @param res
 * @returns void
 */
export function addCourse(req, res) {
  if (!req.body.course.name || !req.body.course.subtitle || !req.body.course.description) {
    res.status(403).end();
  }

  const newCourse = new Course(req.body.course);

  // Sanitize inputs, except description param
  newCourse.name = sanitizeHtml(newCourse.title);
  newCourse.subtitle = sanitizeHtml(newCourse.subtitle);
  newCourse.price = sanitizeHtml(newCourse.price);
  newCourse.duration = sanitizeHtml(newCourse.duration);

  newCourse.slug = slug(newCourse.name.toLowerCase(), { lowercase: true });
  newCourse.cuid = cuid();
  newCourse.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ course: saved });
  });
}

/**
 * Get a single Course
 * @param req
 * @param res
 * @returns void
 */
export function getCourse(req, res) {
  Course.findOne({ cuid: req.params.cuid }).exec((err, course) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ course });
  });
}

/**
 * Delete a Course
 * @param req
 * @param res
 * @returns void
 */
export function deleteCourse(req, res) {
  Course.findOne({ cuid: req.params.cuid }).exec((err, course) => {
    if (err) {
      res.status(500).send(err);
    }

    course.remove(() => {
      res.status(200).end();
    });
  });
}
