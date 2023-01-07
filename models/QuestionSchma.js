const { application } = require("express");
const mongoose=require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const QuestionSchema=mongoose.Schema({
    id: {
        type:Number
    },
	q: {
        type:String
    },
	a: [
        { text: {
            type:String,
        }, isCorrect: {
            type:Boolean,
        } },
        { text: {
            type:String,
        }, isCorrect: {
            type:Boolean,
        } },
        { text: {
            type:String,
        }, isCorrect: {
            type:Boolean,
        } },
        { text: {
            type:String,
        }, isCorrect: {
            type:Boolean,
        } }
	]
})


// QuestionSchema.plugin(AutoIncrement, {inc_field: 'id'});
const Question=mongoose.model("Question",QuestionSchema)
module.exports=Question;