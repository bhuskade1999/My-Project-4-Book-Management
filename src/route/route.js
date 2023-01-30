const express=require("express");
const middlwWare=require("../middleware/middleware")
const router=express.Router();
const userController=require("../controller/userController");
const bookController=require("../controller/bookController");
const reviewController=require("../controller/reviewController")


router.post("/register",userController.creatUser);  // To create New User

router.post("/login",userController.loginUser);  // User Login

router.post("/books",middlwWare.auth,bookController.creatBooks);  //Create New Books

router.get("/books",middlwWare.auth,bookController.getBooks);  //get all books with filterations

router.get("/books/:bookId",middlwWare.auth,bookController.getBookById)   // get books with Id and its reviews 

router.put("/books/:bookId",middlwWare.auth,bookController.updateBook); // To Update Books

router.delete("/books/:bookId",middlwWare.auth,bookController.deleteParam);  // To Delete Bokks

router.post("/books/:bookId/review",reviewController.creatReview); // To Create Review

router.put("/books/:bookId/review/:reviewId",reviewController.updateReviews); //To Update Review 

router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview); // To Delete Reviews



router.all('/*',function(req,res){
    res.status(400).send({status:false,message:"Invalid URL"}) //In Case Wrong url
}) 




module.exports=router;
