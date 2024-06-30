const mongoose = require("mongoose");
const fs = require("fs");
const base64Img = require("base64-img");
const customENV = require("custom-env");

const UserService = require("./services/user");
const CommentService = require("./services/comment");
const VideoService = require("./services/video");

const jsonUserFilePath = "./json/users.json";
const jsonCommentFilePath = "./json/comments.json";
const jsonVideoFilePath = "./json/videos.json";

// Load environment variables based on the current environment (e.g., development, production)
customENV.env(process.env.NODE_ENV, "./config");

// Function to check if a collection exists
async function collectionExists(collectionName) {
  const collections = await mongoose.connection.db.listCollections().toArray();
  return collections.some((collection) => collection.name === collectionName);
}

// Function to convert file to base64
function fileToBase64(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'base64' }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(`data:video/mp4;base64,${data}`);
      }
    });
  });
}

// Main function to insert data from JSON files
async function insertDataFromJson() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if the collections already exist
    const usersCollectionExists = await collectionExists("users");
    const commentsCollectionExists = await collectionExists("comments");
    const videosCollectionExists = await collectionExists("videos");

    // If any collection exists, disconnect and log that data is already inserted
    if (usersCollectionExists || commentsCollectionExists || videosCollectionExists) {
      await mongoose.disconnect();
      console.log("Data already inserted. Starting server.");
      return;
    }

    // Insert user data from JSON file
    const userData = JSON.parse(fs.readFileSync(jsonUserFilePath, "utf-8"));
    for (const user of userData) {
      const { username, password, displayName, profilePicture } = user;
      const base64EncodedProfilePicture = base64Img.base64Sync(profilePicture);
      await UserService.createUser(username, password, displayName, base64EncodedProfilePicture);
    }

    // Insert video data from JSON file and store the video objects
    const videoData = JSON.parse(fs.readFileSync(jsonVideoFilePath, "utf-8"));
    const videoObjects = {}; // Object to store the video objects
    for (const video of videoData) {
      const { title, description, author, username, img, video: videoPath, authorImage, uploadTime, views } = video;
      const base64EncodedImg = base64Img.base64Sync(img);
      const base64EncodedAuthorImage = base64Img.base64Sync(authorImage);
      const base64EncodedVideo = await fileToBase64(videoPath);
      const newVideo = await VideoService.createVideo(title, description, author, username, base64EncodedImg, base64EncodedVideo, base64EncodedAuthorImage, uploadTime, views);
      videoObjects[title] = newVideo._id; // Store the video _id using its title
    }

    // Insert comment data from JSON file
    const commentData = JSON.parse(fs.readFileSync(jsonCommentFilePath, "utf-8"));
    for (const comment of commentData) {
      const { text, userName, displayName, date, img: commentImg, videoTitle } = comment; // Assuming videoTitle is used to link
      const base64EncodedCommentImg = base64Img.base64Sync(commentImg);
      const videoId = videoObjects[videoTitle];
      if (videoId) {
        await CommentService.createComment(text, userName, displayName, date, base64EncodedCommentImg, videoId);
      } else {
        console.error(`Video title "${videoTitle}" not found for comment.`);
      }
    }

    // Log success message and disconnect from the database
    console.log("Data inserted successfully.");
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}

// Call the main function to execute the data insertion
insertDataFromJson();
