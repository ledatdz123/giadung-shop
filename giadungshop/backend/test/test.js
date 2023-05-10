let mongoose = require("mongoose");
let Categories=require('../models/cateModel')
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('Categories', () => {
    // beforeEach((done) => {
    //     Categories.remove({}, (err) => { 
    //        done();           
    //     });        
    // });
      describe("GET /api/categories", ()=>{
        it("It should GET all the categories", (done)=>{
            chai.request(server)
                .get("/api/categories")
                .end((err, response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                });
        });
    });

  describe('/POST book', () => {
      it('it should POST a categories without pages field', (done) => {
          let book = {
              name: "Category one",
              description: "one"
          }
            chai.request(server)
            .post('/api/admin/category/new')
            .send(book)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
              done();
            });
      });
    //   it('it should POST a book ', (done) => {
    //       let book = {
    //           title: "The Lord of the Rings",
    //           author: "J.R.R. Tolkien",
    //           year: 1954,
    //           pages: 1170
    //       }
    //         chai.request(server)
    //         .post('/api/book')
    //         .send(book)
    //         .end((err, res) => {
    //               res.should.have.status(200);
    //               res.body.should.be.a('object');
    //               res.body.should.have.property('message').eql('Book successfully added!');
    //               res.body.book.should.have.property('title');
    //               res.body.book.should.have.property('author');
    //               res.body.book.should.have.property('pages');
    //               res.body.book.should.have.property('year');
    //           done();
    //         });
    //   });
  });
  
  describe('/PUT/:id categories', () => {
      it('it should UPDATE a categories given the id', (done) => {
          let categories = new Categories({name: "The Chronicles of Narnia", description: "C.S. Lewis"})
          categories.save((err, categories) => {
                chai.request(server)
                .put('/api/admin/category/' + categories.id)
                .send({name: "The Chronicles of Narnia", description: "C.S. Lewis"})
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                  done();
                });
          });
      });
  });
 /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id categories', () => {
      it('it should DELETE a categories given the id', (done) => {
          let categories = new Categories({name: "The Chronicles of Narnia", description: "C.S. Lewis"})
          categories.save((err, categories) => {
                chai.request(server)
                .delete('/api/admin/category/' + categories.id)
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      
                  done();
                });
          });
      });
  });
});
