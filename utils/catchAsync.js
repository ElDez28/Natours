module.exports = (fn) => {
  return (req, res, next) => {
    // ovaj return je da funkcija ne bude odmah pozvana nego da je poziva express kad uputimo zahtjev
    fn(req, res, next).catch((err) => next(err)); //ovdje nam async vraca promise pa tako mozemo na njega nadovezati catch
  };
};
