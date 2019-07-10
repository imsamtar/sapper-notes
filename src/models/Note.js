import mongoose from 'mongoose';

export default mongoose.model('Note', mongoose.Schema({
    title: {
        type: String
    },
    text: {
        type: String
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}))