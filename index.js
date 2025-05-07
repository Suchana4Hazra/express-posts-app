const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Sample Posts
let posts = [
    { id: uuidv4(), username: "suchana", content: "Hello, I am Suchana Hazra" },
    { id: uuidv4(), username: "sanchali", content: "Hello, Welcome to my channel" },
    { id: uuidv4(), username: "shraddha", content: "Hello, Please like, share and subscribe my channel" }
];

// Routes
app.get("/", (req, res) => {
    res.send("server is working");
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

//add new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts/new", (req, res) => {
    let id = uuidv4();
    const { username, content } = req.body;
    posts.push({ id, username, content });
    res.redirect("/posts"); // Go back to the posts list
});

//see a particular post
app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    console.log("🔍 Requested ID:", id);
    console.log("📜 All Post IDs:", posts.map(p => p.id));

    const post = posts.find(p => p.id === id);

    if (!post) {
        console.log("❌ Post not found!");
        return res.status(404).send("Post not found");
    }

    console.log("✅ Found post:", post);
    res.render("show.ejs", { post });  // Assuming you have a show.ejs file
});


//Edit post
app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    if (post) {
        res.render("edit.ejs", { post }); // Render the edit.ejs with the post data
    } else {
        res.status(404).send("Post not found");
    }
});


app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const post = posts.find(p => p.id === id);
    if (post) {
        post.content = content;
        res.redirect("/posts");
    } else {
        res.status(404).send("Post not found");
    }
});

app.delete("/posts/:id",(req,res) => {
    let {id} = req.params;
    posts = posts.filter(p => id != p.id);
    res.redirect("/posts");
})




// Start server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
