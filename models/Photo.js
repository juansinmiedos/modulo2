const { Schema, model } = require('mongoose')

const photoSchema = new Schema(
  {
    typeOfAlbum: {
      type: String,
      enum: ['Photo Album', 'Video Album', 'Both']
    },
    hoursOfService: Number,
    priceOfService: Number
  },
  { timestamps: true }
)

module.exports = model('Photo', photoSchema)