#### Overview:
  A front-end only photo website as a test execise for Beenius.

#### Description:
  The website is based on photos, which are "nested" as user > album > photo. At the top layer we have a list of users, each user has albums and each album has photos. These objects are accessed by referencing ID of the previous object. The way this website was envisioned only GET functions were required and used. While the website is straightforward effort was put into connecting all these object and showcasing the right data. 

#### Folder structure:
  - **apis:** Anything to do with APIs, in our case (and in most cases) only REST calls are contained here.
  - **app:** Mostly automatically generated; holds routing and connects components to the application. 
  - **assets:** Stores images, fonts, etc. NOT USED
  - **components:** Various components used thoughout the application, like layout, modal windows, models, etc.
  - **environments:** Some enviroment variables and functions. NOT USED.
  - **pages:** The actual pages which given their own URLs in the routing module. These are standalone pages, while components are just inserted at certain places as additions.
  - **utils:** Utility/helper functions which are used at several locations of the application or justify being separated.

#### Functionality:
  - **Routes:**
    - /user-table => A table (ag-grid) of users with their information. Upon clicking on a row it will lead to the album table.
    - /album-table => A table of albums of a user with some photo thumbnails from the album. Clicking on a row will lead to the photo table.
    - /photo-table => A table of photos within an album. Cliking on a row will open a modal window with the full photo and some additional information.
  - **Other:**
    - Photo modal window => Shows the full photo and details of it, like containing album and the user.
    - Data extension utility => Contains functions that filter and merge data between users, albums and photos, so that extra data can be used and showcased.

 
#### Technology and practices:
  - **Frontend:**
    - Angular => Showcase my current knowledge and experience
    - Ag-grid => N/A
    - JSONPlaceholder => Fake API to simulate the backend.

#### TODOs:
  - Client side tests - most of my testing experience is from the back-end and is lacking on the front-end, furthermore Angulars' way of testing is complicated and the available resources aren't the best, it would make sense to go through a concrete testing course. As of now I haven't done proper testing for this application as I would need to use more time to go through it properly.
  - Visual impovements - several things in the application could be improved to look better, but wouldn't change the functionality.
  
#### License
Proprietary software, please view LICENSE.md.

