# VidTube-Web app (Server)
<img src="/Web-app-Screenshots/logo_vidtube.png" alt="Logo" width="300">

The VidTube app is a video sharing app, made for allowing users across the world to upload and share their video content, comment their thoughts and interact with each other.
This Readme file contains an overview of the web app and its features, along with the server and a guide on how to run it on your machine.

## How To Run
In order to run the Web app, start by cloning the repository to your IDE of choice, you can do this by opening the terminal and entering this command:
`git clone https://github.com/OCDev1/VidTube-server.git`

Or download the repository to your computer.

If you downloaded the repo-change the directory in your terminal to the downloaded repo directory. (if you cloned to your IDE then ignore this)

While in the project directory run:
### `npm install`

and wait for it to finish installing.

### Setting up config and .env.local
In the project directory go to the "config" folder (its in the main project directory) and inside it you will find a file called ".env.local", inside 
".env.local" change the conncetion string to the connection string of your MongoDB, and change PORT to the port you would like to run on.
it should look something like this:

`CONNECTION_STRING=mongodb://localhost:27017/vidtube (change to the connection string of your MongoDB)
PORT=12345 (change to the port you would like to run on)`
there is also `JWT_SECRET=your_secret_key` (you can ignore this)


* Open MongoDB on your computer.

### insertData.js script
* Included in the project is a script called "insertData.js" which will initialize the database with users, videos and comments. we highly reccomend you run this script in order to get the best experience and see all the features (and also to save you some time (: )

* You can run the script by typing `node insertData.js` wait for the script to finish and your database should be initialized with videos, users and comments, hooray!

* NOTE: in order for the DB to be initialized with the users, videos and comments of the script, make sure you dont already have a database called "vidtube" (or else the script won't add it's data), if you do then delete the database and run the script again. 

Now you can run

### `npm start`

And open http://localhost:12345 (replace "12345" with the actual port number you chose in the .env.local file) to view it in your browser.

Now you are all set up, enjoy!

NOTE: you dont need to add the build from the frontend directory, but if you do, make sure not to delete any of the photos and videos in the "public" folder in this project, or else the insertData.js script wont be able to add it's data.

## Our work process:
We started off by watching Hemi's videos in the moodle, they helped us in building a basis for the project, and then we continued on our own. Each of us had a responsibility for a different part of the project, Eyal's part was the sign-in, sign-up and upload video pages, Omri's part was the watch-video page and Max was responsible for the Home page. After everyone finished their pages we connected the pages, at the start it was difficult handling the logic behind the connectivity of the pages but we think we managed to do it on the best side. After finishing the site we tested the logic of it, and when we found bugs we fixed them and continued testing until there were no more bugs. While working on the project we used Jira to keep track of our tasks.

## Web App Features:

### NEW!
* You can now delete your account or edit your user details in your profile page, you can access it by clicking your name in the header on the top right of the screen.
in this page you can also view, delete or edit (redirects to edit page) your videos!

* in the watch video screen, clicking the uploaders image or name will take you to his profile page where you can see more videos that he uploaded.

* Users can now edit and delete only their own comments and videos.

----------------------------------------------------------------------------------

* The **Home page** contains many exciting features such as:
    * A video list displaying some of the videos on the platform
    * A search bar where you can filter videos by title
    * The ability to sign in (or sign up and then sign in) which unlocks more features such as:
        * Upload video - share your videos and content with the world (note: videos must contain a title, description, thumbnail etc.).
        * Edit video - allows you to change video title, description, thumbnail, or the video itself.
        * Delete video - don't want your video to appear on VidTube? you can easily delete it.
        * Commenting on a video (in the watch-video page).
    * Dark mode, which works across the entire Web app.

* The **Watch-Video Page** contains even more great functionality:
    * The video itself with Pause, Play, Fullscreen, and the ability to control Volume and video speed.
    * Interesting details about the video such as the author, author image, views, how long ago the video was uploaded, the description etc.
    * A side list with lots of recommended videos for you to watch and enjoy, each better than the last.
    * The ability to share your thoughts with buttons such as 'Like', 'Dislike', and 'Subscribe', 
      along with a 'Share' drop-down menu where you can share the video on Whatsapp, Gmail or Facebook.
    * You can also share your thoughts via the comment section (note: you must be logged in to comment, and comment must contain text)
      where you can like or dislike other peoples' comments, post a comment on your behalf with your Display name and profile picture,
      and also delete and edit comments (again, you must be logged in to edit and delete).

* The **Upload-Video Page**:
    * Here you can share your video content with the world!
    * Choose a catchy title, informative description, an eye catching thumbnail and then select the video you want to share.
      click 'Upload To Vidtube' and your video can be seen on VidTube!
    * Your new video will be posted under your Display name and your profile picture, with a fresh comment from the Official VidTube account welcoming your new content to the platform.
    * Having second thoughts? don't worry, just click the 'cancel' button and you will be brought back to the Home page!

* The **Edit-Video Page**:
    * We believe in second chances! Here you can edit videos, and change their title, description, thumbnail or the video itself.
    * Having second thoughts? don't worry, just click the 'cancel' button and you will be brought back to the Home page!

* The **Sign-in Page**:
    * Sign in with your Username and password (make sure your account exists first) to unlock features such as commenting, editing, deleting and uploading videos and many more!
    * Don't have an account? No worries! click the "Don't have an account? Sign up here." text and you will be brought to the Sign-up page, where you can create an account.
    * Don't want to sign in? click the VidTube logo and you will be brought back to the Home page.

* The **Sign-up Page**:
    * Sign up by choosing your own Username, Display name, profile picture and password (and Verifying your password) to create your very own VidTube account and unlock features such as commenting, editing, deleting and uploading videos and many more!
    * Already have an account? No worries! click the "Already have an account? Log in" text and you will be brought to the Sign-in page, where you can log in to your account.
    * Don't want to sign up? click the VidTube logo and you will be brought back to the Home page.
    * Make sure your password fits the criteria and that your password and verification password match, or else you wont be allowed to sign up.


# 📷 Screenshots from the Web app:

## Home Page:
![Alt text](/Web-app-Screenshots/Screenshot_1.jpg)

## Home Page (logged in):
![Alt text](/Web-app-Screenshots/Screenshot_2.jpg)

## Home Page (Dark mode):
![Alt text](/Web-app-Screenshots/Screenshot_3.jpg)

## Upload-Video Page:
![Alt text](/Web-app-Screenshots/Screenshot_4.png)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_24.png)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_26.png)

## Side Menu (opened by clicking the 3 lines icon):
![Alt text](/Web-app-Screenshots/Screenshot_5.png)

## Watch-Video Page (logged in):
![Alt text](/Web-app-Screenshots/Screenshot_6.png)

## Watch-Video Page (Dark mode):
![Alt text](/Web-app-Screenshots/Screenshot_7.png)

## Watch-Video Page (Like, Dislike, Subscribe, Share):
![Alt text](/Web-app-Screenshots/Screenshot_8.png)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_9.png)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_10.png)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_11.png)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_12.png)

## Watch-Video Page Comment section (Comment, like, dislike, edit, delete):
![Alt text](/Web-app-Screenshots/Screenshot_91.jpg)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_92.jpg)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_93.jpg)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_94.jpg)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_95.jpg)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_96.jpg)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_97.jpg)

## Edit-Video Page (and editing a video):
![Alt text](/Web-app-Screenshots/Screenshot_18.png)

## Edit-Video Page (Dark Mode):
![Alt text](/Web-app-Screenshots/Screenshot_20.png)

## Sign-Up and Sign-In Pages:
![Alt text](/Web-app-Screenshots/Screenshot_21.png)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_22.png)
-----------------------------------------------------
![Alt text](/Web-app-Screenshots/Screenshot_23.png)

## User Profile Page (for himself):
![Alt text](/Web-app-Screenshots/Screenshot_40.jpg)

## User Profile page (other users):
![Alt text](/Web-app-Screenshots/Screenshot_41.jpg)