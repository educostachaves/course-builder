import { Router } from 'express';
import * as ChapterController from '../controllers/chapter.controller';
const router = new Router();

router.route('/chapters').get(ChapterController.getChapters);

router.route('/chapters/:cuid').get(ChapterController.getChapter);

router.route('/chapters').post(ChapterController.addChapter);

router.route('/chapters/:cuid').delete(ChapterController.deleteChapter);

export default router;
