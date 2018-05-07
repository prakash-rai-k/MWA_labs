const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const Rx = require('rxjs/Rx');
const fetchUrl = "http://jsonplaceholder.typicode.com/users/";

const app = express();
const router = express.Router();
const port = 3000;
const host = 'localhost';

/*view engine setup*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('env', 'development');
app.enable('case sesitive routing');
app.set('x-powered-by',false);
app.listen(port,host, function(){
    console.log(`Listening to : ${host}:${port}`)
})

/* GET users with promise */
const userRoutePromise = router.get('/users/promise', function(req, res, next) {
    fetch(fetchUrl)
    .then((datum) => datum.json())
    .then((datum) => {
      res.render('users', { 'datum': datum , 'method' : 'Promise'});
    });
  });

/* GET users with Observable */
const userRouteObservable = router.get('/users/observable', function(req, res, next) {
    let promised = fetch(fetchUrl).then((datum) => datum.json());
    Rx.Observable.fromPromise(promised)
    .subscribe((datum) => {
      res.render('users', { 'datum': datum , 'method' : 'Observable'})
    });
  });

/* GET users with async await */
const userRouteAsync = router.get('/users/async', function(req, res, next) {
    myAsyncAwait(fetchUrl, res);
  });

  async function myAsyncAwait(fetchUrl, res) {
    try {
      await fetch(fetchUrl)
          .then((datum) => datum.json())
          .then((datum) => {
            res.render('users', { 'datum': datum , 'method' : 'AsyncAwait'});
          });
    } catch (error) {
      console.log(error);
    }
  }


app.use('/', userRoutePromise);
app.use('/', userRouteObservable);
app.use('/', userRouteAsync);


