// VIN, make, model, and mileage.
exports.up = async function(knex) {
  await knex.schema.createTable("cars", tbl => {
    tbl.increments("id");
    tbl
      .integer("VIN")
      .notNullable()
      .unique();
    tbl.text("model").notNullable();
    tbl.float("mileage").notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("cars");
};
