import { Request, Response, NextFunction } from 'express';
import User from './../models/userModel';
import Review from './../models/reviewModel';
import AppError from './../utils/appError';
import catchAsync from './../utils/catchAsync';
import * as factory from './../controllers/handlerFactory';

const filterObj = (
  obj: Record<string, unknown>,
  ...allowedFields: string[]
): Record<string, unknown> => {
  const newObj: Record<string, unknown> = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });

  return newObj;
};

export const updateMe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.password || req.body.passwordConfirm)
      next(
        new AppError(
          'This route is not for password updates, use /updatePassword',
          400,
        ),
      );

    const filteredBody = filterObj(req.body, 'name', 'email');

    const user = Object.assign(req.user!, filteredBody);
    await user.save({ validateModifiedOnly: true });
    res.status(200).json({
      status: 'success',
      data: { user },
    });
  },
);

export const deleteMe = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await User.findByIdAndUpdate(req.user!.id, { active: false });

    res.status(204).json({
      status: 'success',
      data: null,
    });
  },
);

export const updateAvatar = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return next(new AppError('Please provide an image URL', 400));
    }

    const user = await User.findByIdAndUpdate(
      req.user!.id,
      { photo: imageUrl },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!user) {
      return next(new AppError('User not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  },
);

export const createUser = (req: Request, res: Response): void => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

export const getMe = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  req.params.id = req.user!.id;
  next();
};

export const getMyProfile = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const user = await User.findById(req.user!.id);

    if (!user) {
      return next(new AppError('No user found with that ID', 404));
    }


    const reviewsWritten = await Review.countDocuments({ user: req.user!.id });


    res.status(200).json({
      status: 'success',
      data: {
        user: {
          ...user.toObject(),
          reviewsWritten,
        },
      },
    });
  },
);

export const getUser = factory.getOne(User);
export const getAllUsers = factory.getAll(User);
export const updateUser = factory.updateOne(User);
export const deleteUser = factory.deleteOne(User);
