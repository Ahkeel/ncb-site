# Retail Internet Banking - RIB
This is a demo site for the redesign of RIB.

### Prerequisites
* [NodeJS](http://nodejs.org/)
* Gulp (use npm to install this globally `$ npm install gulp -g`)

### How do I get set up?
* After cloning the repo using the terminal/command line, navigate to the directory and run `$ npm install` to download the dependencies.
* See the `gulpfile.js` for the list of gulp commands available to manage this project.
* `$ gulp html` compiles the partial `.html` files and components to complete static `.html` files to the build directory.
* `$ gulp sass` compiles `.scss` files to `.css` files to the build directory.
* `$ gulp css` copies vendor `.css` files to build directory.
* `$ gulp js` copies vendor `.js` files to build directory.
* `$ gulp serve` or `gulp` launches a live reload browser that watches for changes in the project files and propagates these changes real time.

_Edit the `gulpfile.js` file when necessary to configure the project build cycle._

### Demo ###
[Retail Internet Banking](http://ui.ncb.cloud/)

### Branch Management

#### Syntax
##### `<type>/<name>`

##### `<type>`
* bug    - Code changes linked to a known issue.
* feat   - New feature.
* hotfix - Quick fixes to the codebase.
* junk   - Experiments (will never be merged).

##### `<name>`
Always use dashes to separate words, and keep it short.

##### Examples

```
feat/login
hotfix/card-rendering
bug/dashboard-slideshow
```

#### Workflow

##### Summary
All updates should be made in either `feat`, `hotfix` or `bug` branches and merged to the `master` branch after the code is peer reviewed.

##### Instructions
1. Start with a clean working directory up-to-date with `master` branch.
2. `$ git checkout -b feat/<branch-name>` - Checkout a new branch.
3. `$ git status` - Confirm checked out branch branch.
4. Stage and commit changes.
5. `$ git push origin feat/<branch-name>` - Push updates to remote `feat`, `hotfix` or `bug` branch.
6. Log in to gitlab repository.
7. Create merge request for `master` branch and `feat/<branch-name>` branch.
8. Feedback from peer review will either merge updates or request changes to code.please install gulp to run, after installing gulp, run command 'gulp to run'
