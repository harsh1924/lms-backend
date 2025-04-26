import { clerkClient } from "@clerk/express";
import Course from "../models/Course.js";
import { v2 } from "cloudinary";

export const updateRoleToEducator = async () => {
    try {
        const userId = req.auth.userId;
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'educator',
            }
        })

        res.json({
            success: true,
            message: 'You can publish a course now'
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Add New Course
export const addCourse = async (req, res) => {
    try {
        const { courseData } = req.body;
        const imageFile = req.file;
        const educatorId = req.auth.userId;

        if (!imageFile)
            res.json({
                success: false,
                message: 'Image URL not provided'
            })

        const parsedCourseData = await JSON.parse(courseData);
        parsedCourseData.educator = educatorId;

        const newCourse = await Course.create(parsedCourseData);
        const imageUpload = await v2.uploader.upload(imageFile);
        newCourse.courseThumbnail = imageUpload.secure_url;
        await newCourse.save();

        res.json({
            success: true,
            message: 'Course Added Successfully'
        })

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}