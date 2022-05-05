const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/glossary', { useNewUrlParser: true, useUnifiedTopology: true })

const sortSchema = mongoose.Schema({
  algo: {
    type: String,
    unique: true,
  }
  count: {
    type: Number,
  }
})

const Algo = mongoose.model('Algo', sortSchema);

// CRUD Mothods / Functions
// Create
const saveAlgo = (obj) => {
  let algo = new Algo({
    algo: obj.algo,
    count: 1,
  })
  return algo.save();
}

// Read
const getAlgo = () => {
  return Algo.find();
}

// Update
const updateAlgo = () => {

}

module.exports = { saveAlgo, getAlgo, updateAlgo }