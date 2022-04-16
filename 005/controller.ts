export class Controller {
  constructor(){}
  
  sum(req, res) {
    res.send("hellooooo");
  }

  static of() {
    const controller = new Controller();
    return controller;
  }
}