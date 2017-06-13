# Project Setup Checklist

This is the Full Stack Project I am doing for WDI 18. The goal is to create a
working Rails app with a Javascript front end that is able to log in users,
and do all CRUD (Create, Read, Update, Delete) requests. In my case, I am
doing a chore reminder app.

Project requirements for a satisfactory grade are here: [Full Stack Application Requirements](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project).

##  Project Setup
Wednesday, June 7, 2017

* *DONE* Download front-end repo, set up with project name, and push to remote repo auto-mom-front
* *DONE* Test that `grunt server` is working
* *DONE* Download back-end repo, set up repo and directory named auto-mom back
* *DONE* Test that bin/rails server is working
* *DONE* Get gh-pages set up, push to it, and test to see that pages are live on Github Pages. [gh-pages setup instructions](https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide)
* *DONE* Get Heroku set up, push to it, and test to see that it is live. [Heroku setup instructions](https://git.generalassemb.ly/ga-wdi-boston/rails-heroku-setup-guide).
* * Set up rails app. See directions linked [here](https://github.com/lisawilliams/simple-rails/tree/development)
* *DONE* Make sure bin/rails server and bin/rails console both work.


## Get Auth functions working on localhost

Thursday, June 8, 2017

1. *DONE* Set up HTML for auth functions

### Get Sign-up working
1. HTML for sign-up *DONE*
2. events.js for sign-up *DONE*
3. api.js for sign-up *DONE*
4. ui.js for sign-up *DONE*
5. Test that you can successfully sign up via web UI *DONE*
6. Confirm that request ran on backend with appropriate HTTP status code *DONE* (Returns 201 Created as expected)
7. Confirm that new user exists in back-end DB *DONE*

### Get Sign-In working

1. HTML for sign-in *DONE*
2. events.js for sign-in *DONE*
3. api.js for sign-in *DONE*
4. ui.js for sign-in *DONE*
5. Test that you can sign in via web UI *DONE*
6. Confirm that request ran on backend with appropriate HTTP status code *DONE* (Returns 200 OK as expected)

### Get Sign-Out working

1. HTML for sign-out *DONE*
2. events.js for sign-out *DONE*
3. api.js for sign-out *DONE*
4. ui.js for sign-out *DONE*
5. Test that you can sign out via web UI *DONE*
6. Confirm that request ran on backend with appropriate HTTP status code *DONE* (Returns 204 No Content as expected)

### Get Change-Password Working

1. HTML for change-password *DONE*
2. events.js for change-password *DONE*
3. api.js for change-password *DONE*
4. ui.js for change-password *DONE*
5. Test that you can change password via web UI (sign in with new password) *DONE*
6. Confirm that request ran on backend with appropriate HTTP status code *DONE*

## Get Auth Features Working in Production Environment

1. Merge development branch with master branch. *DONE*
2. Run `grunt deploy`. *DONE*
3. Confirm that front-end is updated. *DONE*
4. Wake up Heroku dyno (run heroku restart at command line)
5. Follow directions [here](https://git.generalassemb.ly/ga-wdi-boston/rails-heroku-setup-guide) to push code to the Heroku app.
6. Confirm that Heroku settings are correct. *DONE*
7. Confirm that server is running via logs in Heroku's Web UI. *DONE*
8. Change to .production in config.apiOrigins. *DONE*
9. Sign up a new user. *DONE*
10. Test that the request ran on backend with appropriate HTTP status code. *DONE*
11. Check that new user exists in Heroku DB. *DONE*

See Starting Up Local & Public Apps below for information on how to start & run
the production versions of the front and back end of the AutoMom app.

## Upcoming

### Rails Backend work

### User

1. Scaffold user *DONE*
2. Run bin/rails db:migrate *DONE*
3. Test that you can add a user via rails console *DONE*
4. Test that you can add a user via a curl request *DONE*
5. Confirm that users you add via curl/console exist in database *DONE*

### Chores

1. Scaffold chore resource *DONE*
2. Run bin/rails db:migrate *DONE*
3. Test that you can add a chore via rails console *DONE*
4. Test that you can add a chore via a curl request *DONE*
5. Test that you can return all of a user's chores via a curl request
6. Test that you can update a chore via a curl request *DONE*
7. Test that you can delete a chore via a curl request *DONE*


### Join Table users-have-chores

Friday, June 9

1. Research scaffolding statement for join table *DONE*
2. Confirm with consultants that your scaffolding command is correct *DONE*
3. Create users-have-chores DB migration file *DONE*
4. Run database migration (bin/rails db:migrate) *DONE*
4. Test that you can add a chore to a user via rails console *DONE*

### CRUD Actions

### Create

Sunday, June 11, 2017

1. HTML for create-chore *DONE*
2. events.js for create-chore *DONE*
3. api.js for create-chore *DONE*
4. ui.js for create-chore *DONE*
5. Test that you can create a chore via the Web UI *DONE*
6. Confirm that request ran on backend with appropriate HTTP status code *DONE* Returns 201 Created
7. Confirm that the chore exists in the backend DB in the appropriate tables with all columns filled *DONE*


### Read

Sunday, June 11, 2017

1. HTML for show all a user's chore *DONE*
2. events.js to fire API and UI functions when user pushes "show all chores button"
3. api.js for show chore list *DONE*
4. ui.js for show chore list *DONE*
5. Test that you can display a chore list via the Web UI *DONE*
6. Confirm that request ran on backend with appropriate HTTP status code *DONE*  Returns Completed 200 OK

### Update

Monday, June 11, 2017

1. HTML for update a chore *DONE*
2. events.js for update a chore *DONE*
3. api.js for update a chore *DONE*
4. ui.js for update a chore *DONE*
5. Test that you can update a chore via the Web UI *DONE*
6. Confirm that request ran on backend with appropriate HTTP status code *DONE* Returns `Completed 201 Created`
7. Confirm that the chore has changed in the backend DB *DONE*

A real struggle. Filed [this issue](https://github.com/ga-wdi-boston/full-stack-project/issues/930) and was stuck on it for a long time.

### Delete

Monday, June 11, 2017

1. HTML for delete a chore *DONE*
2. events.js for delete a chore *DONE*
3. api.js for delete a chore *DONE*
4. ui.js for delete a chore *DONE*
5. Test that you can delete a chore via the Web UI *DONE*
6. Confirm that request ran on backend with appropriate HTTP status code *DONE* Returns 204 No Content as expected
7. Confirm that the chore no longer exists in the backend DB *DONE*

This one took a little doing, which I documented in the [following issue](https://github.com/ga-wdi-boston/full-stack-project/issues/923).


## Styling

Styling front page with Bootstrap

# App Title
1. Wrap app title in jumbotron *DONE*

# Error/User Message Block

* Style an error/user message block and rewrite ui.js to point messages there.

# Login Block

1. Create responsive row/columns for auth features so that they either tile across the page or collapse into one column for smaller screens. *DONE*

# Chore Block

1. Style chore block *DONE*
2. See if you can get Handlebars to help you tile them across the page *DONE*

# Quote Block

Nice to have, not need to have
Create a block that shows an inspirational quote from Quotes API.

# Change Password Block

1. Style a block at the bottom with change password. Tile long across bottom *DONE*

# Footer Block

* Style a block for the footer *DONE*
* Made by, links to repos, thank yous *DONE*


## Error Messages


## Future


### Must have

* Show a list of all a user's chores *DONE*
* User-facing error messages for auth problems
* User-facing error messages for chore-CRUD action problems

### Nice to have

* Dependent-destroy chores when a user is gone.
* Hide/show auth from user at appropriate points.

## Questions:

* I have questions about how to use the tokens along with the CRUD actions. I'm not sure how it works. *ANSWERED* Controllers should inherit from OpenReadController, which handles many of these.
* My models/curl requests for "chore" don't include passing a user token. Is that necessary and if so how can I change them if I have already run the migrations? *ANSWERED SEE ABOVE* Curl scripts still needed to be updated to pass a token for testing, and API functions similarly have to pass a token along with user form data. See chore/ui.js for examples.

## Running CURL Scripts from the command line

I &#9829; curl scripts. Here's how to run them from the command line:

At the command line: `sh myscript.sh`

I usually run mine from the top level of my project directory, which means I have
to include the file path. Example: `sh scripts/create-chore-new.sh`


## Starting Local & Public Apps & Pushing Changes To Them

### Local

### Local Front End

1. Start a terminal with 'Basic' settings (white terminal window).
2. `cd wdi/projects/auto-mom/auto-mom-front`
3. `grunt server` (If it's working, it will return `webpack: Compiled successfully.`)
4. Command + t for new tab
5. In new tab, at command line, type `atom .`
6. Visit http://localhost:7165

### Local Back End

1. Start a terminal with 'Ocean' settings (blue terminal window).
2. `cd wdi/projects/auto-mom/auto-mom-back`
3. `bin/rails server`
4. Command + t for new tab
5. In new tab, `bin/rails db`
6. To see tables for app db, `\d+`
6. Command + t for new tab
7. In new tab, `bin/rails console`
8. Command + t for new tab
9. In new tab, `atom .`
10. Visit http://localhost:4741/
11. To check a resource, visit http://localhost:4741/chores

### Public Front End

1. Start a terminal with 'Basic' settings (white terminal window).
2. `cd wdi/projects/auto-mom/auto-mom-front`
3. Be sure the API requests will be directed toward the Heroku backend rather than the lochalhost Rails server. In /auth/api.js make sure the lines read `url: config.apiOrigins.production`. There's a line for the development API origin and the production API origin. Make sure the production API origin line is uncommented and the development one is commented out.
4. Git add and commit any files. Then `git push origin development`
5. `git checkout master` and make sure that master and development branches are equal if you need them to be
6. `grunt deploy` You will get a warning if you haven't committed all changes on both the dev and master branches.
7. Visit [http://lisawilliams.github.io/auto-mom-front]

### Public Back End

1. Start a terminal with 'Ocean' settings (blue terminal window).
2. `cd wdi/projects/auto-mom/auto-mom-back`
4. `git checkout master` and make sure that master and development branches are equal if you need them to be
5. `git push heroku master`
6. If you need to, also run `heroku run rake db:migrate` and `heroku run rake db:seed`
7. Visit https://auto-mom-back.herokuapp.com/
8. To see logs, visit https://dashboard.heroku.com/apps/auto-mom-back/logs
9. To see a psql terminal on your Heroku server, run `heroku pg:psql`

For other Heroku details, see the [GA Heroku Rails Setup Guide](https://github.com/ga-wdi-boston/rails-heroku-setup-guide#check-your-work)

​
