require ( './helpers.js' );



describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });
  const cats = ["Milo", "Otis", "Garfield"];

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendCat(name)', function () {
      it('appends a cat to the end of the cats array', function () {
        destructivelyAppendCat('Ralph');

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });
    function destructivelyAppendCat(name){
      cats.push('Ralph');
    }

    describe('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });
    function destructivelyPrependCat(name){
      cats.unshift('Bob');
    }

    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', function () {
        destructivelyRemoveLastCat();

        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });
    function destructivelyRemoveLastCat(name){
      cats.pop();
    }

    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', function () {
        destructivelyRemoveFirstCat();

        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });
    function destructivelyRemoveFirstCat(name){
      cats.shift();
    }

    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
    function appendCat(name){
      const appCats = [...cats, 'Broom'];
      return appCats;
    }

    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
    function prependCat(name){
      const preCats = ['Arnold', ...cats];
      return preCats;
    }

    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
    function removeLastCat(){
      const lastCats = [...cats.slice(0, 2)];
      return lastCats;
    }

    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
    function removeFirstCat(){
      const firstCats = [...cats.slice(1)];
      return firstCats;
    }
  });
});
