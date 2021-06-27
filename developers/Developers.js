const { Router, response } = require('express');
const express = require('express');
const router = express.Router();
const axios = require('axios');

let developersInfo = {
    gcnit : {
        "login": "gcnit",
        "id": 4833751,
        "node_id": "MDQ6VXNlcjQ4MzM3NTE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gcnit",
        "html_url": "https://github.com/gcnit",
        "followers_url": "https://api.github.com/users/gcnit/followers",
        "following_url": "https://api.github.com/users/gcnit/following{/other_user}",
        "gists_url": "https://api.github.com/users/gcnit/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gcnit/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gcnit/subscriptions",
        "organizations_url": "https://api.github.com/users/gcnit/orgs",
        "repos_url": "https://api.github.com/users/gcnit/repos",
        "events_url": "https://api.github.com/users/gcnit/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gcnit/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Gaurav Chandak",
        "company": "workat.tech",
        "blog": "https://workat.tech",
        "location": "Bangalore, India",
        "email": null,
        "hireable": null,
        "bio": "Building workat.tech;\r\nPreviously Software Engineer at  @Flipkart, @microsoft and @tracxn",
        "twitter_username": null,
        "public_repos": 38,
        "public_gists": 11,
        "followers": 105,
        "following": 25,
        "created_at": "2013-06-26T10:48:34Z",
        "updated_at": "2021-06-02T15:35:36Z",
        "github_id": "gcnit"
    },
    kaursima : {
        "login": "kaursima",
        "id": 68273936,
        "node_id": "MDQ6VXNlcjY4MjczOTM2",
        "avatar_url": "https://avatars.githubusercontent.com/u/68273936?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kaursima",
        "html_url": "https://github.com/kaursima",
        "followers_url": "https://api.github.com/users/kaursima/followers",
        "following_url": "https://api.github.com/users/kaursima/following{/other_user}",
        "gists_url": "https://api.github.com/users/kaursima/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kaursima/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kaursima/subscriptions",
        "organizations_url": "https://api.github.com/users/kaursima/orgs",
        "repos_url": "https://api.github.com/users/kaursima/repos",
        "events_url": "https://api.github.com/users/kaursima/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kaursima/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Simarpreet Kaur",
        "company": null,
        "blog": "",
        "location": "New Delhi, IN",
        "email": null,
        "hireable": null,
        "bio": "Software Engineer at Infosys ltd.",
        "twitter_username": null,
        "public_repos": 8,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2020-07-14T08:54:02Z",
        "updated_at": "2021-06-01T15:21:01Z",
        "github_id": "kaursima",
        "Twitter" : "https://twitter.com/kaursima"
    }
    
};

router.use(express.json());

router.get('/', (req, res) => {
    res.send(developersInfo);
});

router.get('/:userId', (req, res) => {
    if(developersInfo[req.params.userId])
    {
        res.send(developersInfo[req.params.userId]);
    }
    else
    {
        res.send("User does not exist");
    }
});

router.get('/:userId/repos', (req, res) => {
    if(developersInfo[req.params.userId])
    {
        axios(`https://api.github.com/users/${req.params.userId}/repos`).then((response) => {res.send(response.data);})
    }
    else
    {
        res.send("User does not exist");
    }
});

router.post('/', (req, res) => {
    let userId = req.body.Github;
    axios(`https://api.github.com/users/${userId}`).then(response => {
        developersInfo[userId] = {...response.data, ...req.body};
        res.send(developersInfo[userId]);
    });
});
 
module.exports = router;