const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require("../middleware/fetchUser");
const Notes = require("../Models/Notes");
//Route to fetch all notes
//Url: /api/notes/fetchallnotes
router.get('/fetchallnotes', fetchuser, async (req, resp) => {
    try {
        const getnote = await Notes.find({ user: req.user.id});
        resp.status(200).json(getnote);
    } catch (error) {
        return resp.status(500).json({ error: 'Internal server error', message: error.message })
    }
});

//Route to add notes
//Url: /api/notes/addnote
router.post('/addnote', fetchuser, [
    body("title", 'Enter a note titile').isLength({ min: 5 }),
    body("description", 'Enter a note descrition').isLength({ min: 5 }),
], async (req, resp) => {
    //return errors when any validation true
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(400).json({ error: errors.array() });
    }
    try {
        const { title, description, tag } = req.body;
        const note = new Notes({
            title, description, tag, user: req.user.id
        });
        const saveNote = await note.save();
        resp.status(200).json(saveNote);
    } catch (error) {
        return resp.status(500).json({ error: 'Internal server error', message: error.message })
    }
});

module.exports = router;