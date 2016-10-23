import Content from '../models/content';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Contents
 * @param req
 * @param res
 * @returns void
 */
export function getContents(req, res) {
  Content.find().sort('-dateAdded').exec((err, contents) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ contents });
  });
}

/**
 * Save a Content
 * @param req
 * @param res
 * @returns void
 */
export function addContent(req, res) {
  if (!req.body.content.title) {
    res.status(403).end();
  }

  const newContent = new Content(req.body.content);

  // Sanitize inputs, except description param
  newContent.title = sanitizeHtml(newcontent.title);
  newContent.cuid = cuid();
  newContent.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ content: saved });
  });
}

/**
 * Get a single Content
 * @param req
 * @param res
 * @returns void
 */
export function getContent(req, res) {
  Content.findOne({ cuid: req.params.cuid }).exec((err, content) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ content });
  });
}

/**
 * Delete a Content
 * @param req
 * @param res
 * @returns void
 */
export function deleteContent(req, res) {
  Content.findOne({ cuid: req.params.cuid }).exec((err, content) => {
    if (err) {
      res.status(500).send(err);
    }

    content.remove(() => {
      res.status(200).end();
    });
  });
}
