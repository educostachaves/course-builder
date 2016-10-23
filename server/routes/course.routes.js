import { Router } from 'express';
import * as CourseController from '../controllers/course.controller';
const router = new Router();

router.route('/courses').get(CourseController.getCourses);

router.route('/courses/:cuid').get(CourseController.getCourse);

router.route('/courses').post(CourseController.addCourse);

router.route('/courses/:cuid').delete(CourseController.deleteCourse);

export default router;
