# Simple Node.js Demo

This repository contains a collection of simple Node.js programs for demonstration purposes.

## Dependency


## How to install Node.js

1. **Installer method**
    Just download the installer from [Node.js website] (https://nodejs.org/en/#home-downloadhead)  --> Install it

2. **If you want to downlad the package with bash**
    ```
    curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
    ```

3. **Using Homebrew**
    ```
    brew install node
    ```

4. **Using Macports**
    ```
    port install nodejs<major version>


    # Example
    
    port install nodejs7
    '''


- [Node.js](https://nodejs.org/): You can download it by following this [Article](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac).

## How to Run

1. **Fork the repository:**

   Click on the "Fork" button at the top right corner of this repository to create a copy in your GitHub account.

2. **Clone the forked repository to your local machine:**

    ```basg
    git clone https://github.com/your-username/newton-school-lessons.git
    ```

3. **Navigate to the project directory:**

    ```bash
    cd newton-school-lessons
    ```

4. **Install dependencies for the main application using npm:**

    If the `express` module is required, run the following command in the terminal to dowload/update the modules:

    ```bash
    npm install
    ```

5. **Run the main application using Node.js:**

    ```bash
    node server.js
    ```

   This will start the server, and you should see output indicting that the server is running.

6. **Open your web browser and visit [http://localhost:PORT](http://localhost:3000) to see the main application in action.**

   Note: The default port is set to 3000. If you've configured a diffeent port, replace `PORT` in the URL with the actual port number.

## Folder-Specific Instructions

7. **Explore individual program folders:**

    Navigate to each program folder using the `cd` command:

    ```bash
    cd program1
    ```

    bash
    cd program2
    ```

    Replace `program1` and `program2` with the actual names of the folders representing individual programs.

8. **Install dependencies and run each program in its respective folder:**

    For each program, run the following commands:
    ```
    bash
    cd program-folder
    npm install
    node server.js
    ```

    Replace `program-folder` with the actual folder nam of the program.

## Notes

- This is a collection of basic demonstration applications intended for learning purposes.
- Feel free to explore each program's folder and the `server.js` file to understand the Node.js code.
- For more information about Node.js, visit [https://nodejs.org/](https://nodejs.org/).
