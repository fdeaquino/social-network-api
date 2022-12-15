# Social Network API

## Description
The code in this repo features the API for a social network application where users can share their thoughts, reactions to their friend's thoughts, and create a friends list. The API is built with Express.js for routing, a MongoDB database, and the Mongoose ODM (Object-Document Mapper). Together, these technologies create a RESTful API that execute CRUD methods. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To use this application you will need to: 
1. Clone this repository into your local machine. 
2. Then, using the terminal you will need to run `npm install` to install the npm packages/dependencies. 
3. Run `npm start` to start the server. 
9. Use Insomnia to test the functionality of the application as shown in the [video guide](https://drive.google.com/file/d/11nKCAG32ieal8Re35TdwG-syhfcwNTkB/view?usp=sharing). 

## Usage

Please follow [this video guide](https://drive.google.com/file/d/11nKCAG32ieal8Re35TdwG-syhfcwNTkB/view?usp=sharing) for using the Social Network API or follow the steps above.
When testing, please use `http://localhost:3001` and the following endpoints for the route you'd like to use. 

- User Routes/Endpoints
    - Create a User & Get All Users: `/api/users`
    - Get One User, Update a User, & Delete a User: `/api/users/:id`
        - Note: `:id` indicates the user's id
- Thought Routes/EndPoints
    - Create a Thought: `/api/thoughts/:userId`
    - Get All Thoughts: `/api/thoughts/`
    - Get One Thought, Update a Thought, Delete a Thought `/api/thoughts/:userId/:thoughtId`
- Reaction Routes/Endpoints
    - Create a Reaction: `/api/thoughts/:thoughtId/reactions`
        - Note: use PUT instead of POST
    - Delete a Reaction: `/api/thoughts/:thoughtId/reactions/:reactionId`
- Friend Routes/Endpoints
    - Add a Friend to Friends List: `/api/users/:userId/:friendId`
        - Note: use PUT instead of POST
    - Delete a Friend from Friends List: `/api/users/:userId/:friendId`

## Credits
Documentation used:
- [Express.js](https://expressjs.com/en/4x/api.html#express)
- [MongoDB](https://www.mongodb.com/docs/manual/tutorial/getting-started/)
- [Mongoose](https://mongoosejs.com/docs/index.html)

## License

[MIT](https://spdx.org/licenses/MIT.html)
