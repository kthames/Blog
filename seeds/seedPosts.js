const { Post } = require('../models');

const postdata = [
  {
    title: 'Test Post',
    content: 'This is a test post. ',
    date_created: '1/1/01'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;