import Chapter from '../models/chapter';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Chapters
 * @param req
 * @param res
 * @returns void
 */
export function getChapters(req, res) {
  Chapter.find().sort('-dateAdded').exec((err, chapters) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ chapters });
  });
}

/**
 * Save a Chapter
 * @param req
 * @param res
 * @returns void
 */
export function addChapter(req, res) {
  if (!req.body.chapter.title) {
    res.status(403).end();
  }

  const newChapter = new Chapter(req.body.chapter);

  // Sanitize inputs, except description param
  newChapter.title = sanitizeHtml(newchapter.title);
  newChapter.cuid = cuid();
  newChapter.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ chapter: saved });
  });
}

/**
 * Get a single Chapter
 * @param req
 * @param res
 * @returns void
 */
export function getChapter(req, res) {
  Chapter.findOne({ cuid: req.params.cuid }).exec((err, chapter) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ chapter });
  });
}

/**
 * Delete a Chapter
 * @param req
 * @param res
 * @returns void
 */
export function deleteChapter(req, res) {
  Chapter.findOne({ cuid: req.params.cuid }).exec((err, chapter) => {
    if (err) {
      res.status(500).send(err);
    }

    chapter.remove(() => {
      res.status(200).end();
    });
  });
}
