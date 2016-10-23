import { Router } from 'express';
import * as ContentController from '../controllers/content.controller';
const router = new Router();

router.route('/contents').get(ContentController.getContents);

router.route('/contents/:cuid').get(ContentController.getContent);

router.route('/contents').post(ContentController.addContent);

router.route('/contents/:cuid').delete(ContentController.deleteContent);

export default router;
