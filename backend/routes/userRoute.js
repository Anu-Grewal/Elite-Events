import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// GET /api/profile - Fetch user profile
router.get('/profile', isAuthenticated, getUserProfile);

// PUT /api/profile - Update user profile
router.put('/profile', isAuthenticated, updateUserProfile);

export default userRouter;
