'use strict';
var express = require('express');
var router = express.Router();
const GoogleNewsRss = require('google-news-rss');
const domains = require('../model/domain');
const googleNews = new GoogleNewsRss();
var dmains = [];
/* GET home page. */
router.get('/', async function (req, res) {
    dmains = await domains.getAllURL();
    //googleNews
    //    .search('Huog+duong', 108, 'vi')
    //    .then(resp => { console.log(resp); console.log(resp.length) });
    res.render('home', { title: 'Click here' });
});
/* GET URL. */
router.get('/distributeURL', async function (req, res) {
    const domain = await domains.getURLByID(Math.floor(Math.random() * 5) + 1);
    console.log(domain[0]);
    console.log(domain[0].ByName);
    res.json(domain[0].ByName);
});
/* GET URL. */
router.get('/allURL', async function (req, res) {
    const domain = await domains.getAllURL();
    res.json(domain);
});
/* GET URL. */
router.get('/search',  function (req, res) {
    res.render('main', { url: dmains[Math.floor(Math.random() * 5)].ByName});
});
module.exports = router;
