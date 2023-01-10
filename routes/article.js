'use strict'

var express= require('express');
var ArticleController=require('../controllers/article.js');

var router=express.Router();

var multipart =require('connect-multiparty');
var md_upload= multipart({uploadDir: './upload/articles'});

//rutas de prueba
router.post('/datos-curso',ArticleController.datosCurso);
router.get('/test-de-controllador',ArticleController.test);


//rutas para articulos
router.post('/save',ArticleController.save);

router.get('/articles',ArticleController.getArticles);

router.get('/article/:id',ArticleController.getArticle);

router.put('/article/:id',ArticleController.update);

router.delete('/article/:id',ArticleController.delete);

router.post('/upload-image/:id',md_upload,ArticleController.upload);

router.get ('/get-image/:image',ArticleController.getImage);

router.get ('/search/:search',ArticleController.search);


module.exports=router;