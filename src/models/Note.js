import mongoose from 'mongoose';

export default mongoose.model('Note', mongoose.Schema({
    title: {
        type: String
    },
    text: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}))