# Initech Email

* git clone
* yarn
* `yarn dev` to develop
* `messages/` folder, then `app/Store.js` to add messages
* `yarn package-all` to build standalone apps

Constraints:

* Messages are markdown-formatted, with [YAML front-matter](https://middlemanapp.com/basics/frontmatter/)
* The names in the `to` and `from` fields of the messages are case sensitive,
  and must match exactly the name in `app/Store.js`
  Going forward, we'll use email addresses instead of names as identifiers.

Remaining tasks, priority-sorted:

* [ ] Add more messages (see [the messages folder](./messages))
* [ ] Change the title of the app to "Initech Email", or something similar
* [ ] Set the icon to the initech logo + email icon
* [ ] Compile two versions of the app: one for Peter, one for Milton
* [ ] Use `@initech.com` email addresses instead of names
* [ ] Style it up a bit. Add colors.
* [ ] Only show emails that have been sent to / from the logged-in user.
* [ ] Add fake buttons for reply/reply all/forward/compose.
      When clicked,
      display an error message saying
      "We're having trouble connecting to the server. Please wait, then try again."
