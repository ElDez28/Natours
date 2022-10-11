class APIFeatures {
  constructor(query, queryString) {
    //query je mongoose query i ona je ustvari Tour.find(), a drugi je express query a to je ono sto unese korisnik
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((field) => delete queryObj[field]);

    //2)ADVANCED FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte?|lte?)\b/g,
      (match) => `$${match}`
    ); /*JER NAM REQ.QUERY VRACA OBJEKAT ALI BEZ DOLLAR SIGN U OVOME GTE PA TO UBACIMO
     ALI DA BI TO UBACILI MORAMO OBJEKAT PRETVORITI U STRING KAO STO SMO URADILI U KODU PRIJE OVOG*/
    this.query = this.query.find(JSON.parse(queryStr));
    return this; //da bi mogli raditi chain methoda moramo vratiti izmijenjen objekat
  }
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt _id');
    }
    return this;
  }
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }
  paginate() {
    const page = +this.queryString.page || 1;
    const limit = +this.queryString.limit || 100;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
