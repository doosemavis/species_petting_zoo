# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


cat = Category.create(name: 'Felis')
dog = Category.create(name: 'Canis')
horse = Category.create(name: 'Equus')

cat.animals.create(name: 'catus', layman: 'Domestic Cat', age: 5, extinct: false)
cat.animals.create(name: 'silvestris', layman: 'European Wildcat', age: nil, extinct: false )