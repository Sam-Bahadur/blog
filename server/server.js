const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();
const fileUpload = require('express-fileupload')

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)
// mongoose.connect('mongodb+srv://pradeep:pradeep@cluster0.b7pme.mongodb.net/blog?retryWrites=true&w=majority')

const { User } = require('./models/user');
const { Blog } = require('./models/blog');
const { auth } = require('./middleware/auth')
const blog = require('./models/blog');


app.use(fileUpload());

// file upload endpoint

app.post('/api/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
    const file = req.files.file;

    file.mv(`${__dirname}/../client/public/uploads/${file.name}.jpg`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });
  
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('client/build'))


// get 
app.get('/api/getblog',(req,res)=>{
    let id = req.query.id;
    Blog.findById(id,(err,doc)=>{
            if(err) return res.status(400).send(err);
            res.send(doc);
    })
})


// getAuthor
app.get('/api/getAuthor',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname:doc.lastname
        })
    })
})

app.get('/api/blogs',(req,res)=>{
    // localhost:3001/api/blogs?skip=5&limit=2&order=asc
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    Blog.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
            if(err) return res.status(400).send(err);
            res.send(doc);
    })
})

// logout
app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })

})

// user posts
app.get('/api/user_posts',(req,res)=>{
    Blog.find({ownerId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

// post
app.post('/api/blog',(req,res)=>{
    const blog = new Blog(req.body)

    blog.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            blogId: doc._id
        })
    })
})

app.get('/api/auth',auth,(req,res)=>{
    res.json({
        isAuth: true,
        id: req.user._id,
        email:req.user.email,
        name: req.user.name,
        lastname: req.user.lastname
    })
})

// post user
app.post('/api/register',(req,res)=>{
    const user = new User(req.body);
    user.save((err,doc)=>{
        if (err) return res.json()({success:false});
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})

// login
app.post('/api/login',(req,res)=>{
    User.findOne({'email':req.body.email},(err,user)=>{
            if(!user) return res.json({isAuth: false, message:"Auth failed, email not found"});

            user.comparePassword(req.body.password,(err,isMatch)=>{
                if(!isMatch) return res.json({
                    isAuth:false,
                    message:"wrong password"
                });


              user.generateToken((err,user)=>{
                    if(err) return res.status(400).send(err);
                    res.cookie('auth', user.token).json({
                        isAuth: true,
                        id: user._id,
                        email: user.email
                    })
              })
                
            })

    })
})

// all users
app.get('/api/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return status(400).send(err);
        res.status(200).send(users)
    })
})

// update
app.post('/api/blog_update',(req,res)=>{
    Blog.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success :true,
            doc
        })
    })
})

// delete
app.delete('/api/delete_blog',(req,res)=>{
    let id = req.query.id;

    Blog.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

// for production
if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
    })
}


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})