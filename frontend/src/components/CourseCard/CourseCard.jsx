import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedCourse } from "../../slices/courseSlice";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import picCourse from "../../images/picCourse.jpg";

export const CourseCard = ({ course }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Розкоментовано

    const handleDetailsClick = () => {
        dispatch(setSelectedCourse(course)); // Зберігаємо обраний курс у Redux
        navigate(`/tasksTeacher`); // Переходимо до сторінки завдань
    };

    return (
        <div className="main-block__card">
            <Card sx={{ width: 365, height: 292 }}>
                <CardActionArea onClick={handleDetailsClick}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={picCourse} // Заміна на зображення курсу, якщо доступне
                        alt="Course image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {course?.course_name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleDetailsClick}>
                        Перейти
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

CourseCard.propTypes = {
    course: PropTypes.shape({
        course_name: PropTypes.string.isRequired,
        _id: PropTypes.string,
        image: PropTypes.string,
    }).isRequired,
};