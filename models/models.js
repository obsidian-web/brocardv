const sequelize  = require('../database')
const {DataTypes} = require('sequelize')

/* Declare MainEntities

 const <MainEntity> = sequelize.define('<string_name>', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img:                 {type: DataTypes.STRING,    allowNull: false}
})

*/
const User = sequelize.define('user', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number:              {type: DataTypes.STRING, allowNull: false, unique: true },
    password:            {type: DataTypes.STRING, allowNull: false},
    role:                {type: DataTypes.STRING, defaultValue: 'User'}
})

const Vehicle = sequelize.define('vehicle', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    modelId:             {type: DataTypes.INTEGER,   allowNull: false },
    manufacturerId:      {type: DataTypes.INTEGER,   allowNull: false },
    sideId:              {type: DataTypes.INTEGER,   allowNull: false },
    name:                {type: DataTypes.STRING,    allowNull: false },
    price:               {type: DataTypes.INTEGER,   allowNull: false },
    capacity:            {type: DataTypes.INTEGER,   allowNull: false },
    year:                {type: DataTypes.INTEGER,   allowNull: false },
    side:                {type: DataTypes.STRING,    allowNull: false },
    drive:               {type: DataTypes.STRING,    allowNull: false },
    description:         {type: DataTypes.STRING,    allowNull: false },
    image:               {type: DataTypes.STRING,    allowNull: false },
})

const Review = sequelize.define('review', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    message:             {type: DataTypes.STRING,    allowNull: false },
    mark:                {type: DataTypes.STRING,    allowNull: false },
    approved:            {type: DataTypes.BOOLEAN,    allowNull: false, defaultValue: false},
})

/* Declare HelperEntities

 const <HelperEntity> = sequelize.define('<string_name>', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img:                 {type: DataTypes.STRING,    allowNull: false}
})

*/
const VehicleImage = sequelize.define('vehicle_image', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img:                 {type: DataTypes.STRING,    allowNull: false}
})

/* Declare SortingEntities

 const <SortingEntity> = sequelize.define('<string_name>', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,   allowNull: false },
})

*/
const Manufacturer = sequelize.define('vehicle_manufacturer', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false },
})
const Model = sequelize.define('vehicle_model', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false },
    manufacturerId:      {type: DataTypes.STRING,    allowNull: false },
})
const Side = sequelize.define('vehicle_side', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false },
})


/* Merged sorting entities
   ... Create merging entities for using category trees...

    const <Sort1Sort2> = sequelize.define('<sort1_sort2>', {
        id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true} //only id
    })

*/
const ModelManufacturer = sequelize.define('model_manufacturer', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const ModelSide = sequelize.define('model_side', {
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

/* Define relations between HELPERS and MAIN entities

<Main>.hasMany(<Helper>,{as: '<string hybrid name>'})
<Helper>.belongsTo(<Main>)

* */
Vehicle.hasMany(VehicleImage,{as: 'images'})
VehicleImage.belongsTo(Vehicle)


/* Define relations between SORTING and MAIN entities

<Sorting>.hasMany(<Main>)
<Main>.belongsTo(<Sorting>)

* */
Model.hasMany(Vehicle)
Vehicle.belongsTo(Model)

Side.hasMany(Vehicle)
Vehicle.belongsTo(Side)

Manufacturer.hasMany(Vehicle)
Vehicle.belongsTo(Manufacturer)

/* Define relations between SORTING entities:

<Sorting1>.belongsToMany(<Sorting2>,{through: <MergedEntityBetweenSorting1AndSorting2>})

* */
Model.belongsToMany(Manufacturer,{through: ModelManufacturer})
Manufacturer.belongsToMany(Model,{through: ModelManufacturer})

/* Export all defined entities */
module.exports = {
    User, Vehicle, Review, VehicleImage, Model, Manufacturer, Side, ModelManufacturer, ModelSide
}