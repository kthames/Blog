const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all posts and JOIN with user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));

      res.status(200).json(posts);
  
      // Pass serialized data and session flag into template
    //   res.render('homepage', { 
    //     projects, 
    //     logged_in: req.session.logged_in 
    //   });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
            {model: Comment, attributes: ['content', 'date_created']},
            {model: User,attributes: ['name']},
        ],
    });
  
      const post = postData.get({ plain: true });

      res.status(200).json(post);
  
    //   res.render('project', {
    //     ...project,
    //     logged_in: req.session.logged_in
    //   });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/comment/:id', async (req, res) => {
    try {
      const commentData = await Comment.findByPk(req.params.id, {
        include: [
            {model: Post, attributes: ['title','content', 'date_created']},
            {model: User,attributes: ['name']},
        ],
    });
  
      const comment = commentData.get({ plain: true });

      res.status(200).json(comment);
  
    //   res.render('project', {
    //     ...project,
    //     logged_in: req.session.logged_in
    //   });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  module.exports = router;