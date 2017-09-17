// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/condi');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/condi';

module.exports = class UserService {
  async findById(id) {
    try {
      const db = await MongoClient.connect(url);
      const items = db.collection('items');
      await items.insertOne({hello: 'world_no_safe'});
      console.log('db aquired');
      let item = await items.findOne({hello: 'world_no_safe'})
      console.log(item);
      return item;
      // return {id}
    } catch (e) {
      console.log(e);
    }
  }
}
