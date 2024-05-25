// src/routes/api.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.FUNGENERATORS_API_KEY;

// Get a random fact
router.get('/fact/random', async (req, res) => {
    try {
        const category = req.query.category || '';
        const subcategory = req.query.subcategory || '';
        const response = await axios.get(`http://api.fungenerators.com/fact/random`, {
            params: { category, subcategory },
            headers: { 'X-FunGenerators-Api-Secret': API_KEY }
        });
        
        if (response.data && response.data.contents && response.data.contents.fact) {
            res.render('index', { data: response.data.contents.fact, error: null });
        } else {
            throw new Error('Unexpected API response format');
        }
    } catch (error) {
        console.error('Error retrieving fact:', error.response ? error.response.data : error.message);
        res.render('index', { data: null, error: 'Error retrieving fact' });
    }
});

// Create a new fact entry
router.put('/fact', async (req, res) => {
    try {
        const { fact, category, subcategory, tags } = req.body;
        const response = await axios.put(`http://api.fungenerators.com/fact`, null, {
            params: { fact, category, subcategory, tags },
            headers: { 'X-FunGenerators-Api-Secret': API_KEY }
        });
        
        res.json(response.data);
    } catch (error) {
        console.error('Error creating fact:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error creating fact' });
    }
});

// Get a fact entry by ID
router.get('/fact', async (req, res) => {
    try {
        const { id } = req.query;
        const response = await axios.get(`http://api.fungenerators.com/fact`, {
            params: { id },
            headers: { 'X-FunGenerators-Api-Secret': API_KEY }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error retrieving fact:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error retrieving fact' });
    }
});

// Delete a fact by ID
router.delete('/fact', async (req, res) => {
    try {
        const { id } = req.query;
        const response = await axios.delete(`http://api.fungenerators.com/fact`, {
            params: { id },
            headers: { 'X-FunGenerators-Api-Secret': API_KEY }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error deleting fact:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error deleting fact' });
    }
});

// Get a random historic event on a given day
router.get('/fact/onthisday/event', async (req, res) => {
    try {
        const { day, month } = req.query;
        const response = await axios.get(`http://api.fungenerators.com/fact/onthisday/event`, {
            params: { day, month },
            headers: { 'X-FunGenerators-Api-Secret': API_KEY }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error retrieving historic event:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error retrieving historic event' });
    }
});

module.exports = router;
