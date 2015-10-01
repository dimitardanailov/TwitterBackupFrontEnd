# Twitter Backup Front End

### Wiki pages
  1. [Gulp.md](Wiki/Gulp.md)
  1. [Node.md](Wiki/Node.md)
	1. [Webpack.md](Wiki/Webpack.md)

## Project Requirements:

Develop a Javascript-based Single Page Application (SPA) with .NET Backend  that allows users to store tweets from their favorite Twitter users. The web application should provide the following functionality.

- Sign-in with Twitter
- Show a list of my favorite twitter users. Add and remove twitter users from the favorites list.
- Display posts from a selected favorite user. Download posts from Twitter and save in a local database.
- Provide the ability to “retweet” posts from favorite users.
- Provide an administrator dashboard, where admins can see:
  - Total number of users, downloaded posts and retweets.
  - Number of items in the favorite list for every user.
  - Number if downloaded posts for every user.
  - Number of retweets for every users.

## Change Host file

Twitter not allow to be used `localhost` for `Callback URL`. Please visit: [Why can’t I use localhost as my OAuth callback?](https://twittercommunity.com/t/why-cant-i-use-localhost-as-my-oauth-callback/708)

> You can provide any valid URL with a domain name we recognize on the application details page. OAuth 1.0a requires you to send a oauth_callback value on the request token step of the flow and we'll accept a dynamic locahost-based callback on that step.

We can resolve this problem, if you change `hosts files`.

> The hosts file is a computer file used by an operating system to map hostnames to IP addresses. The hosts file is a plain text file, and is conventionally named hosts.

- [Modify your hosts file](http://www.rackspace.com/knowledge_center/article/modify-your-hosts-file)

My configurations are:

```bash
127.0.0.1 local.dev
```
