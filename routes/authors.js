const express = require('express');
const router = express.Router();
const Author = require('../models/authors')


//All Authors Route
router.get('/', (req, res) => {
    res.render('authors/index')
});

//New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author()})
});


//Create Author
router.post('/', (req, res) => {
    const author = new Author ({
        name: req.body.name
    });
    try {
        const newAuthor = author.save();
        //res.redirect('authors/${newAuthor.id}`');
        res.redirect(`authors`);

    } catch {
        res.render('authors/new', {
            authors: author,
            errorMessage: 'Error Creating Author'
            })
    }
    // author.save((err, newAuthor) => {
    //     if (err) {
    //         res.render('authors/new', {
    //             authors: author,
    //             errorMessage: 'Error Creating Author'
    //         })
    //     } else {
    //         //res.redirect('authors/${newAuthor.id}`')
    //         res.redirect(`authors`);
    //     }
    // });
});

module.exports = router
