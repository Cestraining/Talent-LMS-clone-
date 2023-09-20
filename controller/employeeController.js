const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
mongoose.set('useFindAndModify', false);

router.get('/', (req, res) => {
    res.render("employee/info")

    // viewTitle: "Insert Employee"

});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req,res)    
    

});

function insertRecord(req, res) {
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.lastName = req.body.lastName;
    employee.email = req.body.email;
    employee.username = req.body.username;
    console.log(employee.email);
    employee.password = req.body.password;
    employee.bio = req.body.bio;
    employee.save((err, doc) => {
        if (!err)
           console.log("success");
        else {
            if (err.name == 'ValidationError') {
                // handleValidationError(err, req.body);
                res.render("employee/info", {
                    // viewTitle: "Insert Employee",
                    

                    employee: req.body
                   
                });
               
                    
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Employee.findOneAndUpdate({ password: req.body.password }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('employee/list'); }
        else {
            if (err.name == 'ValidationError') {
                // handleValidationError(err, req.body);
                res.render("employee/list", {
                    // viewTitle: 'Update Employee',
                    employee: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}



router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("employee/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    })
})




module.exports = router;