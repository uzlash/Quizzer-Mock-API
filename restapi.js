const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Data = require('./data').DATA

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/course', (req, res) => {
    res.status(200).json({ status: 'success', payload: Data, message: 'All courses fetched successfully'});
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    Data.find(course => {
        if(course.id == id) {
            res.status(200).json({ status: 'success', payload: course, message: 'Single course fetched successfully'});
        }
        // else {
        //     res.status(500).json({ status: 'failed', payload: null, message: "Error" });        
        // }
    })        
})
// //Get One
// app.get('/course', async (req, res) => {
//     try {
//         const usersArray = await UserDao.getAll();
//         res.status(200).json({ status: 'success', payload: usersArray, message: 'All Courses fetched successfully'});
//     } catch (err) {
//         res.status(500).json({ status: 'failed', payload: null, message: err });
//     }
// });
// //Get All
// app.get('/course/:id', async (req, res) => {
//     const id = req.params.id;
//     if (id) {
//         try {
//             const singleCourse = await CourseDao.getOne(id);
//             res.status(200).json({ status: 'success', payload: singleUser, message: 'Single user fetched Successfully!' });
//         } catch (err) {
//             res.status(500).json({ status: 'failed', payload: null, message: err });
//         }
//     } else {
//         res.status(500).json({ status: 'failure', payload: null, message: 'Invalid User id to fetch' });
//     }
// });

app.listen(3000, () => {
    console.log('Courses Microservice listening on port 3000')
});

module.exports.app = app;