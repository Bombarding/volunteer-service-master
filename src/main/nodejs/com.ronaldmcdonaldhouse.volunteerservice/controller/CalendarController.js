/**
 * Dependencies
 */
var express = require('express');
var router = express.Router();

/**
 * Calendar Model
 */
var Calendar = require('../model/Calendar.js');

/**
 * HTTP GET: /calendar/
 * Return calendar data for all users
 */
router.get('/', function(req, res) {
    Calendar.find({}, function (err, calendar_data) {
        if(err) throw err;
        res.send(calendar_data);
    });
});

/**
 * HTTP GET: /calendar/:month
 * Return calendar data by 'month'
 */
router.get('/:month', function(req, res) {
    Calendar.find({month: req.params.month}, function (err, calendar_data) {
        if(err) throw err;
        res.send(calendar_data);
    });
});

/**
 * HTTP GET: /calendar/:calendar_id
 * Return calendar data by 'calendar_id'
 */
router.get('/:calendar_id', function(req, res) {
    Calendar.find({calendar_id: req.params.calendar_id}, function (err, calendar_data) {
        if(err) throw err;
        res.send(calendar_data);
    });
});

/**
 * HTTP POST: /calendar/new
 * Add new calendar data
 */
router.post('/new', function(req, res) {
    Calendar.create({
        calendar_id: req.body.calendar_id,
        service_ids: req.body.service_ids,
        year: req.body.year,
        month: req.body.year
    }, function (err, claim_data) {
        if (err) throw err;
        res.send(claim_data);
    });
});

/**
 * HTTP POST: /calendar/update
 * Update an existing calendar
 */
router.post('/update', function(req, res) {
    Calendar.update({
        date: req.body.date,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day
        }, {
        organization_name: req.body.organization_name,
        contact_name: req.body.contact_name,
        phone_number: req.body.phone_number,
        contact_email: req.body.contact_email,
        number_of_volunteers: req.body.number_of_volunteers,
        type_of_service_project: req.body.type_of_service_project
    }, function(err, calendar_data) {
        if(err) throw err;
        res.send(calendar_data);
    });
});

module.exports = router;