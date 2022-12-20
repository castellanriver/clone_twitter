<<<<<<< HEAD
import express, { json } from 'express';
import 'express-async-errors';

// 아직 DB가 없으므로 임시로 만들어보자
let tweets = [
{
  id: '1',
  text: '드림코딩',
  createdAt: Date.now().toString(),
  name: 'Bob',
  username: 'bob',
  url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
},
{
  id: '2',
  text: '엘리의 드림',
  createdAt: Date.now().toString(),
  name: 'Ellie',
  username: 'ellie',
  url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
}
];

const router = express.Router();

// GET / tweets
// GET / tweets?username=:username

router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username 
  ? tweets.filter((tweet) => tweet.username === username)
  : tweets;
  res.status(200).json(data);
})

// GET / tweets/:id

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({message: `Tweet id(${id}) not found`});
  }
});
// POST / tweets
router.post('/', (req, res, next) => {
  const { text, name, username} = req.body
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  }
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
}) 
// PUT / tweets / :id

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(204).json(tweet);
  } else {
    res.status(404).json({message: `Tweet id(${id}) not found`});
  }
})
// DELETE / tweets /: id

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
})
export default router;
=======
import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);

// POST /tweeets
router.post('/', tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet);

export default router;
>>>>>>> dcca2ac (frontend changes)
