# Auto-Mom

Auto-Mom is a chore reminder system for kids and their grownups.

As an adult, remembering all the things you need to do -- and all the things
your kids need to do -- takes up a lot of valuable mental space.

As a kid, getting nagged by a parent is really just the worst.

AutoMom reduces these two problems so kids and grownups can use their newly-freed-up
mental space for more important things, like choosing which fandom to get into
as a family. Buffy? Dr. Who? With AutoMom, you decide, because you're not
wasting time figuring out who does what when.

## Link to Live, Deployed AutoMom App

[AutoMom Deployed App](https://lisawilliams.github.io/auto-mom-front/)

## Link to Front And Back End Repositories

[AutoMom Front End](https://github.com/lisawilliams/auto-mom-front)

[AutoMom Back End](https://github.com/lisawilliams/auto-mom-back)

## What AutoMom Does And How It Works

AutoMom is a client-server application with a Javascript front end and a Rails
backend. The front end communicates with the server via an API.

## The AutoMom Front End (Client)

The front end is written in Javascript and makes use of jQuery, AJAX,
Bootstrap, and Handlebars.js.

Handlebars.js is used to manage the display of chores to users, and Bootstrap
is used to both nicely tile these across the page -- or organize them into one
neat column for use on mobile devices. AutoMom communicates with a server
via an API, making requests to get, post, update, or delete chores. The front end
also makes request to the server for auth functions (sign up, sign in,
sign out, change password). It is a fully functional CRUD application.

## The AutoMom Back End (Server)

The AutoMom back end is a Rails application which supports RESTful requests
from the AutoMom client.

### Databases and Tables

The backend uses a Postgres database to store user information. In communicating
with the database, I did not set up tables or joins directly; I used the Rails ORM to do that.

The app currently has two tables -- one for users, and one for chores. I created
a migration to create a foreign key on the chores table to link individual chores
with their users.

There are two active tables, users and chores.

The `user` has id and email, and also stores the token, password hash, and timestamps
for when a user record was created and updated.

The `chores` table has a chore ID, name of chore, description, day of week, and
two columns with timestamps for when a chore record was created and updated.

### Entity Relationship Diagram

Users ----|----< Chores

A user has many chores.


## Approach to building AutoMom

I approached building AutoMom very differently than my Tic-Tac-Toe project.

I first wrote down a checklist of each basic feature, in two categories: Auth
functions (for letting users sign in and out, etc.) and CRUD functions (for
letting users create, read, update, and delete chores).

I started with Auth as those functions are largely built in the Rails API template
provided by GA. I used the front-end auth code that I had working from Tic-Tac-Toe,
which communicated with a back-end Rails app based on the same API. I was able to get Auth
functions working fairly easily.

I then moved on to the CRUD functions. Here, the backend was not already built for us,
so I used `rails generate` to generate resources, and ran through a procedure that I
followed for each resource I built. Here's an example:

### Chores

1. Scaffold chore resource *DONE*
2. Run bin/rails db:migrate *DONE*
3. Test that you can add a chore via rails console *DONE*
4. Test that you can add a chore via a curl request *DONE*
5. Test that you can return all of a user's chores via a curl request *DONE*
6. Test that you can update a chore via a curl request *DONE*
7. Test that you can delete a chore via a curl request *DONE*

(To see my complete project checklist, see [AutoMom Project Checklist](https://github.com/lisawilliams/auto-mom-front/blob/master/checklist.md))

## Issues I Encountered

One of the places where I struggled the most was in creating a foreign key on the chores
table. I generated a migration file using Rails -- but I did it twice. After deleting one,
I found that Rails was looking for the one I deleted! Jordan A. helped me recover the deleted
migration file via Git, and once that was done, it worked. Lesson: don't run `bin/rails db:migrate` twice
without checking first.

I also realized that applying show(), hide() and empty() to divs in response to user
behavior could get pretty confusing if you weren't careful about how divs were nested.
Next time I intend to plan out divs first, keeping them as minimal as possible and making
nesting simpler and more obvious for me, to make it easier for me to target them.

## User Stories

* Users want to sign up
* Users want to sign in
* Users want to sign out
* Users want to change their password

* Users want to see a list of their current chores, with directions and days of week those chores are performed;
* Users want to create new chore reminders;
* Users want to update a chore to change the directions, title, or day of week it is performed
* Users want to delete a chore when it is no longer relevant.


## Wireframes

[Here is a link to a wireframe I drew for AutoMom](https://github.com/lisawilliams/auto-mom-front/blob/development/Auto-Mom-Wireframe.jpg).
