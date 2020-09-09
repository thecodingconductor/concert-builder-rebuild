export class User {
  constructor(username, concerts = []) {
    this.username = username;
    this.concerts = concerts;
  }
}

export class Concert {
  constructor(title, pieces = []) {
    this.id = generateRandomNumber(0, 50000);
    this.title = title;
    this.pieces = pieces;
  }
}

export class Piece {
  constructor(composer, title) {
    this.composer = composer;
    this.title = title;
  }
}
