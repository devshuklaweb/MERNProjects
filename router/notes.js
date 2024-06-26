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

//Route to update notes
//Url: /api/notes/updatenote
router.put('/updatenote/:id', fetchuser, async (req, resp) => {
    const {title,description,tag} = req.body;
    const newNote = {};
    if(title) {
        newNote.title = title;
    }
    if(description) {
        newNote.description = description;
    }
    if(tag) {
        newNote.tag = tag;
    }
    try {
        //check note id is valid or not
        const note = await Notes.findById(req.params.id); 
        if(!note) {
            return resp.status(404).json({error:'Note id not found!'});
        }
        // check updated note is login user user note or not
        if(note.user.toString() != req.user.id) {
            return resp.status(401).json({error:'You not able to update this note.'});
        }
        result = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
        resp.status(200).json({"Success":"Note has been updated.",note:result});
    } catch (error) {
        return resp.status(500).json({ error: 'Internal server error', message: error.message })
    }
});

//Route to delete notes
//Url: /api/notes/deletenote
router.delete('/deletenote/:id', fetchuser, async (req, resp) => {
    try {
        //check note id is valid or not
        const note = await Notes.findById(req.params.id); 
        if(!note) {
            return resp.status(404).json({error:'Note id not found!'});
        }
        // check updated note is login user user note or not
        if(note.user.toString() != req.user.id) {
            return resp.status(401).json({error:'You not able to update this note.'});
        }
        result = await Notes.findByIdAndDelete(req.params.id);
        resp.status(200).json({"Success":"Note has been deleted.",note:result});
    } catch (error) {
        return resp.status(500).json({ error: 'Internal server error', message: error.message })
    }
});

module.exports = router;