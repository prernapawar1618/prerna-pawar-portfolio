import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    problem: { type: String, required: true },
    approach: { type: String, required: true },
    outcome: { type: String, required: true },
    tags: [String],
    githubUrl: String,
    liveUrl: String,
    createdAt: { type: Date, default: Date.now },
});

export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true }, // Markdown content
    readTime: String,
    createdAt: { type: Date, default: Date.now },
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);
