import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookSchema = new Schema({

    id:{
        type:Number,
        required:'ID is required'
    },
    bookName:{
      type:String,
      required:'Book name is required'
  },
    isbn:{
        type:Number,
        required:'ISBN is required'
    },
    author:{
        type:String,
        required:'Author is required'
    },
    publicationDate:{
        type:Date
    }
});