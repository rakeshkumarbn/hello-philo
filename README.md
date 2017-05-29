# hello, philo

We recognize that doing a coding exercise at a whiteboard during an interview is
stressful and likely doesn't represent how you would do if you were to work on a
problem in your own time, in a comfortable environment.

Instead, we're asking you to implement a few features on this podcatcher app.
Out of respect for your time, we suggest timeboxing yourself at about three
hours or so, but that's not a hard deadline. If you would like to spend more
time getting familar with the frameworks/libraries or polishing your code, feel
free. We don't expect you to implement every suggested feature in the exercise.
We're really just hoping to learn how you think, and how you find your way
around a new and possibly confusing codebase.

This is a somewhat new way of doing technical interviews for us. We are
curious to hear what you think of the exercise and the process, and how we can
improve them.

If you have questions or get stuck during the exercise, please reach out to your
interviewer on the private Slack channel that you received by email.

## App

A podcatcher app built on [react](http://facebook.github.io/react/index.html), [redux](http://rackt.github.io/redux/), [react-router](https://github.com/rackt/react-router), and [redux-router](https://github.com/rackt/redux-router), built by [Webpack](http://webpack.github.io/) with Sass/PostCSS-transformed scoped styles. Webpack hot-reloading pattern provided by Dan Abramov's [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate/).

## Getting Started
Node 6.3.1+ is the only prerequisite. Consider using nvm [http://nvm.sh/] for
installation.

Fetch dependencies with `npm install`.
Start the dev server with `npm start`.
Lint with `npm run lint`.

## Structure

- There is a single state object for the application.
- Views should rarely if ever hold state.
- State should only be updated in store reducers.
- Actions and route changes (set up as actions via redux-router) should trigger
state change.
- Store reducers are pure functions: state is passed in, and a new state object
is returned. State should never be mutated.
- Side effects should occur via [action creators](http://rackt.org/redux/docs/Glossary.html#action-creator) or [middleware](http://rackt.org/redux/docs/advanced/Middleware.html).
- Sass is written inside the `:local` scope, and imported to the relevant views
as an object. Webpack makes sure that the class we define has a unique name,
such that it does not interfere with the styles of other components.

Currently a static list of podcasts is used on the back end. Data is fetched,
parsed, and returned from an API endpoint (`/api/podcasts`) as a JSON array
representing the podcast feeds. That information is fed into the store and
drives the app. Actions send information from these lists of podcasts to the
store, where it is trickled down to a simple player view in order to play audio
and display metadata.

## TODO

Currently a user is able to play a podcast episode. Your task is to implement
a playlist/queue with the following functionality:
*REQUIRED*
* allow a user to add a podcast episode to a queue
* once an episode ends, the next queued episode should play automatically
* render the queue within the application
*OPTIONAL*
* allow a user to remove an episode from the queue
* allow a user to reorder episodes in the queue
* allow a user to play an episode directly from the queue

Though the main task is implementing the queue, please feel free to implement
additional features if you like. This is your chance to shine: show us what you
think is a good representation of your skills and interests.

## What We're Looking For

There are likely more tasks that you will be able to complete in the suggested
three hours. We encourage you to focus on tasks and implementation details that
highlight your skillset and interests; fewer tasks done well is better than more
tasks done at a lower degree of fidelity. Additionally, feel free to "fill in
the gaps" by explaining in TODO.md what you would do and how you might do it
given more time.

In addition to functionality, we also look at architecture, organization,
linting and style, and overall polish. We're looking for idiomatic modern
JavaScript that matches the established style of the existing codebase. We value
code that is easy to follow and understand, without stale or commented-out
sections. Aim for code that you would be proud to deploy.

Lastly, this exercise does not have to be done in isolation. We encourage you to
ask questions as you familiarize yourself with the codebase, architecture, and
application. You should have received an email invite to a private Slack channel
where you can discuss questions with your interviewer. Feel free to reach out or
work alone, whichever suits you.

And remember, the purpose of this exercise is to help you demonstrate your
abilities on your own time in a low-pressure environment. Have fun with it!

## Saving and Submitting

- Work directly on master
- Commit your work to that branch (make sure not to leave uncommitted work!)
- Please do NOT include your name or other indentifying information in your
commit messages or code, as we review submissions anonymously to reduce bias
- Remove node_modules from the project, create a zip, and send it back to us
- Feel free to use TODO.md to include any additional thoughts or comments on
the app, your implementation, or what you would do if given more time.
