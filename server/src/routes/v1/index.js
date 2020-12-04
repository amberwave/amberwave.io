const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const testRoutes = require('./test.routes');

/*
  // @route    GET to-do
  // @desc     Get all to do item
  // @access   Private
  router.get('/v1/to-do', ToDoController.get);
  // @route    GET to-do
  // @desc     Get single o do item
  // @access   Private
  router.get('/v1/to-do/:id', ToDoController.getById);
  // @route    POST to-do
  // @desc     Create to do item
  // @access   Private
  router.post('/v1/to-do', ToDoController.create);
  // @route    PUT to-do
  // @desc     Edit to do item
  // @access   Private
  router.put('/v1/to-do/:id', ToDoController.edit);
  // @route    DELETE to-do
  // @desc     Delete to do item
  // @access   Private
  router.delete('/v1/to-do/:id', ToDoController.deleteToDo);
*/

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/test', testRoutes);

module.exports = router;