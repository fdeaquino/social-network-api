const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // this RegExp validator checks if the user input is a valid email  
            match: [/.+\@.+\..+/, 'Enter a valid email']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// gets the user's total number of friends
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

// creates the User model using the UserSchema
const User = model('User', UserSchema);
module.exports = User;