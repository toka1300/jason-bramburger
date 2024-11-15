<h3>Setting Up Node (First Time Only)</h3>

1. Install homebrew package manager `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. Install Node.js `brew install node@23`
3. Verify the right Node.js is installed by running `node -v` It should print `v23.2.0`
4. Verify the right npm version is installed by running `npm -v` should print `10.9.0`
5. Run `npm install`


<h3>Making Edits</h3>

1) Only make changes in the `src` folder, not in the `public` folder, this has the built final version of the site.
2) To view your changes locally, open your terminal, navigate to the project directory and run `npm start`
3) Go to `http://localhost:8080/` to view these changes in your browser
    - The site will automatically update every time you save a file in your src folder.
4) Once done your edits, shutdown the local server, by pressing `Ctrl + C` in your terminal
5) Run the following commands:
`npm run build`
`git add .`
`git commit -m "<message about what your changed>"`
`git push origin main`