# VidTube-Web app (Server)
<img src="/Web-app-Screenshots/logo_vidtube.png" alt="Logo" width="300">
NOTE: This is the server for *part 3* of the project, meaning that it works with the Android app *and* the Web app aswell.

The VidTube app is a video sharing app, made for allowing users across the world to upload and share their video content, comment their thoughts and interact with each other.
This Readme file contains an overview of the web app and its features, along with the server and a guide on how to run it on your machine.

## How To Run
Start by cloning the repository to your IDE of choice, you can do this by opening the terminal and entering this command:
`git clone https://github.com/OCDev1/VidTube-server.git`

Or download the repository to your computer.

If you downloaded the repo-change the directory in your terminal to the downloaded repo directory. (if you cloned to your IDE then ignore this)

Make sure your'e on branch `main-part3`.

While in the project directory run:
### `npm install`

and wait for it to finish installing.

### Setting up config and .env.local
In the project directory go to the "config" folder (its in the main project directory) and inside it you will find a file called ".env.local", inside 
".env.local" change the conncetion string to the connection string of your MongoDB, and change PORT to the port you would like to run on.
it should look something like this:

`CONNECTION_STRING=mongodb://localhost:27017/vidtube (change to the connection string of your MongoDB)
PORT=12345 (NOTE: you must use 12345 for it to work)`
there is also `JWT_SECRET=your_secret_key` (you can ignore this)


* Open MongoDB on your computer.

### insertData.js script
* Included in the project is a script called "insertData.js" which will initialize the database with users, videos and comments. we highly reccomend you run this script in order to get the best experience and see all the features (and also to save you some time (: )

* You can run the script by typing `node insertData.js` wait for the script to finish and your database should be initialized with videos, users and comments, hooray!

* NOTE: in order for the DB to be initialized with the users, videos and comments of the script, make sure you dont already have a database called "vidtube" (or else the script won't add it's data), if you do then delete the database and run the script again. 

Now you can run

### `npm start`

In order to run the Android app, start by cloning the repository to Android Studio, you can do this by opening the terminal and entering this command:
`git clone https://github.com/eyalg43/project_android.git`, and move to branch `mainPart3`.

After cloning the repository, open the project in Android Studio.
(Note: if you are using a physical device, make sure to change the code, such that in every place it says "10.0.2.2" change it to your IP address)

In order to run the web app open http://localhost:12345 (replace "12345" with the actual port number you chose in the .env.local file) to view it in your browser.

Now you are all set up, enjoy both the Android app and the Web app!

NOTE: you dont need to add the build from the frontend directory, but if you do, make sure not to delete any of the photos and videos in the "public" folder in this project, or else the insertData.js script wont be able to add it's data.

## Our work process:
Again, we started off by watching Hemi's videos in the moodle, they helped us understand how the server should work with the client side we built on the first part of the project. Each member of the group was working on a different part of the server, Max worked on the videos part, Eyal worked on the users part, and Omri worked on the comments part. We then connected the server to work with the client side but before we did it, we modified the client side to work with, POST, GET and more methods in order for it to work with the server. Then after that worked we connected a Mongo database to work with the server.

## Web App Features:

### NEW!
* You can now delete your account or edit your user details in your profile page.

* in the watch video screen, clicking the uploaders image or name will take you to his profile page where you can see more videos that he uploaded.

* Users can now edit and delete only their own comments and videos.

----------------------------------------------------------------------------------

* The **Home page** contains many exciting features such as:
    * A video list displaying in a random order some of the videos on the platform
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
    * Your new video will be posted under your Display name and your profile picture. (Note that the home page displays 20 videos, the 10 most popular and 10 other random videos, so your video might not show up on the home page straight away, but you can see it in your profile page, just click the your username in the top right of the screen)
    * Having second thoughts? don't worry, just click the 'cancel' button and you will be brought back to the Home page!

* The **Edit-Video Page**:
    * We believe in second chances! Here you can edit videos, and change their title, description, thumbnail or the video itself. (Note that the home page displays 20 videos, the 10 most popular and 10 other random videos, so your video might not show up on the home page straight away, but you can see it in your profile page, just click the your username in the top right of the screen)
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


# 📷 Screenshots from the Android app:

## Home Activity (and switching to dark mode):
<img src="/Android-app-screenshots/Screenshot_1.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_2.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_3.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_4.png" alt="Example Image">

## Log in Activity (and signing up):
<img src="/Android-app-screenshots/Screenshot_5.png" alt="Example Image">

## Sign-up Activity (and uploading image from camera):
<img src="/Android-app-screenshots/Screenshot_6.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_7.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_8.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_9.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_10.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_11.png" alt="Example Image">

## Watch-Video Activity:
<img src="/Android-app-screenshots/Screenshot_37.png" alt="Example Image">

## Watch-Video Activity (Like, Dislike, Comments-post, edit, delete, like, dislike):
<img src="/Android-app-screenshots/Screenshot_19.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_20.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_21.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_22.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_23.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_24.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_25.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_26.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_27.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_28.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_30.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_29.png" alt="Example Image">

## Watch-Video Activity - Dark Mode:
<img src="/Android-app-screenshots/Screenshot_18.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_36.png" alt="Example Image">

## Upload-Video Activity:
<img src="/Android-app-screenshots/Screenshot_12.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_13.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_14.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_145.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_15.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_16.png" alt="Example Image">

## Edit-Video Activity (and editing a video):
<img src="/Android-app-screenshots/Screenshot_31.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_32.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_33.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_34.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_345.png" alt="Example Image">

## Edit-Video Activity - Dark Mode:
<img src="/Android-app-screenshots/Screenshot_35.png" alt="Example Image">

## Edit-User Activity:
<img src="/Android-app-screenshots/Screenshot_50.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_51.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_52.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_53.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_54.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_55.png" alt="Example Image">

## User-Videos Activity:
<img src="/Android-app-screenshots/Screenshot_60.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_61.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_62.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_63.png" alt="Example Image">

## Swipe to refresh:
<img src="/Android-app-screenshots/Screenshot_70.png" alt="Example Image">
<img src="/Android-app-screenshots/Screenshot_71.png" alt="Example Image">

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